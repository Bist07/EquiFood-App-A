import React from 'react'
import { StyleSheet, View, Text, Pressable, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";;
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
export default function Register() {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <View style={{ alignSelf: "flex-start", marginTop: 70 }}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{
                        backgroundColor: '#50C878',
                        width: 35,
                        height: 35,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                    }}
                >
                    <Ionicons name="chevron-back-outline" size={20} color="white" />
                </Pressable>
            </View>

            <Text style={{ fontSize: 25, marginTop: 80 }} >Register</Text>

            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 100 }}>
                <MaterialIcons name="person" size={20} color='#ccc' style={{ marginRight: 5 }} />
                <TextInput placeholder='Full Name' style={{ flex: 1, paddingVertical: 0 }} />
            </View>

            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
                <MaterialIcons name='email' size={20} color='#ccc' style={{ marginRight: 5 }} />
                <TextInput placeholder='Email' style={{ flex: 1, paddingVertical: 0 }} keyboardType="email-address" />
            </View>

            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
                <MaterialIcons name="lock" size={20} color='#ccc' style={{ marginRight: 5 }} />
                <TextInput placeholder='Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />
            </View>

            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 45 }}>
                <MaterialIcons name="verified-user" size={20} color='#ccc' style={{ marginRight: 5 }} />
                <TextInput placeholder='Confirm Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Privacy')}>
                <Text> I agree to the terms and conditions.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerButton}
                onPress={() => navigation.navigate('ProfilePage')}>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}


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
    registerButton: {
        backgroundColor: '#50C878',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        marginTop: 25,

        alignItems: 'center',
        borderRadius: 5
    },
    registerText: {
        fontWeight: 'bold',
        color: 'white'
    },
})