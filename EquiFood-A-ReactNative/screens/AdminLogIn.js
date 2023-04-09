import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native'
import Logo from '../assets/logos/Equifood_Logo.png'
import CustomInput from '../components/CustomInput'
import { useNavigation, useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, Feather } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';



const AdminLogIn = () => {
    const [email, setEmail] = useState('');
    const [enteredAdminPassword, setenteredAdminPassword] = useState('');

    const navigation = useNavigation();

    // function for signing in:


    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };
    const onChangeenteredAdminPasswordHandler = (enteredAdminPassword) => {
        setenteredAdminPassword(enteredAdminPassword);
    };

    const onSignInPressed = () => {
        console.warn('Sign In');
    };
    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');
    };
    const registerPressed = () => {
        console.warn('Register');
    };
    const ROPressed = () => {
        console.warn('Restaurant Owner Page');
    };
    const AdminPressed = () => {
        console.warn('Admin Page');
    };

    const onSubmitFormHandler = async (e) => {


        //Validating entered password against the on in the database
        //if they match, send the request and log in

        if (email.length != 0 && enteredAdminPassword.length != 0) {
            try {
                const data = {

                    email: email,
                    enteredAdminPassword: enteredAdminPassword

                };
                console.log(JSON.stringify(data));
                const response = await axios({
                    url: `${config.local.url}:${config.local.port}/admin/login`,
                    method: 'post',
                    data: data,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });


                console.log(response.data.PasswordGood);
                var passwordValid = response.data.PasswordGood;

                if (passwordValid == true) {
                    navigation.navigate('Admin');
                } else {
                    alert("Email or Password Incorrect")
                }

            } catch (error) {
                console.log(error);
                alert("Account not Found");
            }




        }
        else (alert("Please enter both an Email and a Password"));
    }
    //Front end and styling below
    return (
        <View style={styles.root}>

            <View style={{ alignSelf: "flex-start", marginTop: 70 }}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{
                        backgroundColor: "#50c864",
                        width: 35,
                        height: 35,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 0,
                    }}
                >
                    <Ionicons name="chevron-back-outline" size={20} color="white" />
                </Pressable>
            </View>

            <Image style={styles.logo}
                source={Logo} />

            {/* <Text>Equifood</Text> */}

            {/* <CustomInput placeholder="Username" value= {username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry ={true}/>
        */}
            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
                <MaterialIcons name='email' size={20} color='#ccc' style={{ marginRight: 5 }} />
                <TextInput placeholder='Email' style={{ flex: 1, paddingVertical: 0 }} keyboardType="email-address" autoCapitalize='none' autoCorrect={false} value={email} onChangeText={onChangeEmailHandler} />
            </View>

            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
                <MaterialIcons name="lock" size={20} color='#ccc' style={{ marginRight: 5 }} />
                <TextInput placeholder='Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} autoCapitalize='none' autoCorrect={false} value={enteredAdminPassword} onChangeText={onChangeenteredAdminPasswordHandler} />
            </View>

            <TouchableOpacity style={styles.signInButton}
                onPress={() => { onSubmitFormHandler(); }}>
                <Text style={styles.signInText}>Sign In as Admin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.passwordButton}
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.passwordText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.passwordButton}
                onPress={() => navigation.navigate('RegisterAdmin')}>
                <Text style={styles.passwordText}>Register</Text>
            </TouchableOpacity>


        </View>
    )
}

export default AdminLogIn;



const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
        // borderTopLeftRadius:50,
        // borderTopRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderBottomEndRadius: 50
    },

    logo: {
        // backgroundColor: "blue",
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginTop: 45,
        borderRadius: 70,
        padding: 20,
        paddingBottom: 40,
        marginBottom: 70,

    },
    signInButton: {
        backgroundColor: "#50c864",
        width: '100%',
        padding: 15,
        marginVertical: 5,
        marginTop: 40,

        alignItems: 'center',
        borderRadius: 5
    },
    signInText: {
        fontWeight: 'bold',
        color: 'white'
    },
    passwordButton: {
        marginTop: 15,
    },
    passwordText: {
        color: 'grey',
    },
    ROButton: {
        marginTop: 90,
    },
    ROText: {
        color: '#50C878',
        fontSize: 18,
    },
    AdminButton: {
        marginTop: 20,
    },
    AdminText: {
        color: '#50C878',
        fontSize: 18,
    }

});