import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native'
import Logo from '../assets/logos/Equifood_Logo.png'
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import config from '../config';



const LogIn = () => {
    const [email, setEmail] = useState('');
    const [enteredPassword, setenteredPassword] = useState('');
    
    const navigation = useNavigation();

    // function for signing in:


    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };
    const onChangeenteredPasswordHandler = (enteredPassword) => {
        setenteredPassword(enteredPassword);
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

    try {
        const data = {
            
            email: email,
            enteredPassword: enteredPassword
            
        };
        console.log(JSON.stringify(data));
        const response = await axios({
          url: `${config.local.url}:${config.local.port}/customer/login`,
          method:'post',
          data:data,
          headers: {
            'Content-Type': 'application/json'
             },
            });
    

        
      } catch (error) {
        console.log(error);
        alert("An error has occurred");
      }


    }
    return (
        <View style={styles.root}>

            <Image style={styles.logo}
                source={Logo} />
            {/* <Text>Equifood</Text> */}

            {/* <CustomInput placeholder="Username" value= {username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry ={true}/>
        */}
            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
                <MaterialIcons name='email' size={20} color='#ccc' style={{ marginRight: 5 }} />
                <TextInput placeholder='Email' value={email} onChangeText={onChangeEmailHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="email-address" />
            </View>

            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
                <MaterialIcons name="lock" size={20} color='#ccc' style={{ marginRight: 5 }} />
                <TextInput placeholder='Password' value={enteredPassword} onChangeText={onChangeenteredPasswordHandler} style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true}  />
            </View>

            <TouchableOpacity style={styles.signInButton}
                onPress={() => {navigation.navigate('RestaurantsView'); onSubmitFormHandler();}}>
               
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.passwordButton}
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.passwordText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.passwordButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.passwordText}>Register</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.ROButton}
                onPress={() => navigation.navigate('RestaurantOwnerLogIn')}>
                <Text style={styles.ROText}>Log In as Restaurant Owner</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.AdminButton}
                onPress={() => navigation.navigate('AdminLogIn')}>
                <Text style={styles.AdminText}>Log In as Admin</Text>
            </TouchableOpacity>


        </View>
    )
}

export default LogIn;



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
        marginTop: 120,
        borderRadius: 70,
        padding: 20,
        paddingBottom: 40,
        marginBottom: 50,

    },
    signInButton: {
        backgroundColor: '#50c864',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        marginTop: 20,

        alignItems: 'center',
        borderRadius: 5
    },
    signInText: {
        fontWeight: 'bold',
        color: 'white'
    },
    passwordButton: {
        marginTop: 13,
    },
    passwordText: {
        color: 'grey',
    },
    ROButton: {
        marginTop: 30,
    },
    ROText: {
        color: '#50c864',
        fontSize: 18,
    },
    AdminButton: {
        marginTop: 20,
    },
    AdminText: {
        color: '#50c864',
        fontSize: 18,
    }

});

