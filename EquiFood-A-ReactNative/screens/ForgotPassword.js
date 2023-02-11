import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native'
import Logo from '../assets/logos/Equifood_Logo.png'
import CustomInput from '../components/CustomInput'
import { useNavigation, useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {MaterialIcons} from '@expo/vector-icons';
import { Ionicons, Feather } from "@expo/vector-icons";

export default function ForgotPassword(){

    const navigation = useNavigation();

    return(
        <View style={styles.root}> 
        <View style={{alignSelf: "flex-start", marginTop: 70}}>
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
            <Ionicons name="chevron-back-outline" size={20} color="white"  />
          </Pressable>
          </View>

            <Text style={{fontSize:25, marginTop:120}}> Reset Password </Text>


            <Text style={{fontSize:11, marginTop:90}}> Please provide your email. </Text>
            <Text style={{fontSize:10, marginTop:15}}> You will recieve a link shortly requesting you to change your password. </Text>
           

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:70}}>
                <MaterialIcons name='email' size={20} color='#ccc' style={{marginRight:5}}/>
                <TextInput placeholder = 'Email' style={{ flex:1, paddingVertical:0}} keyboardType="email-address" />
            </View>


            <TouchableOpacity style={styles.linkButton}
                onPress={() => navigation.navigate('ProfilePage')}>
                <Text style ={styles.linkText}>Recieve Link</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex:1,
        // borderTopLeftRadius:50,
        // borderTopRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderBottomEndRadius: 50
    },
    linkButton:{
        backgroundColor: '#50C878',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        marginTop:35,

        alignItems: 'center',
        borderRadius: 5
    },
    linkText:{
        fontWeight:'bold',
        color:'white'
    },
})