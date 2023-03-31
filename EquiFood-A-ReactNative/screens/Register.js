import { useNavigation } from '@react-navigation/native'
import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';
import {MaterialIcons} from '@expo/vector-icons';

    const Register = () => {
        const navigation = useNavigation();
       const [first_name, setFirstname] = useState('');
       const [last_name, setLastName] = useState('');
       const [email, setEmail] = useState('');
       const [passwordHash, setPassword] = useState('');
       const [passwordCheck, setPasswordCheck] = useState('');

      
        // const axios = require('axios');
      
        // Tried using formData, didn't work :(
        // var data = new FormData();
        // data.append('item_name', foodName);
        // data.append('price', discPrice);
        // data.append('restaurant', 1);
        // data.append('original_price', ogPrice);
        // data.append('quantity', servings);
      
        
      
        const onChangeFirstNameHandler = (first_name) => {
            setFirstname(first_name);
          };
        
            const onChangeLastNameHandler = (last_name) => {
           setLastName(last_name);
          };
        
            const onChangeEmailHandler = (email) => {
            setEmail(email);
          };

          const onChangePasswordHandler = (passwordHash) => {
            setPassword(passwordHash);
          };
        
          const onChangePasswordCheckHandler = (passwordCheck) => {
            setPasswordCheck(passwordCheck);
          };
    
          var hasNumber = /\d/;


      
        const onSubmitFormHandler = async (e) => {
       
          


        
        if(passwordCheck == passwordHash ){
            if(passwordCheck.length > 4){
                if(hasNumber.test(passwordCheck) == true){
          try {
            const data = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                passwordHash: passwordHash
                
            };
            console.log(JSON.stringify(data));
            const response = await axios({
              url: `${config.local.url}:${config.local.port}/customer/register`,
              method:'post',
              data:data,
              headers: {
                'Content-Type': 'application/json'
                 },
                });
        

                navigation.navigate('LogIn');
                alert("Account Created!");
                
          } catch (error) {
            console.log(error);
            alert("An error has occurred");
          }

        }else(alert("Password must include a number"));

        }else(alert("Password must be at least 5 characters"));

        }else(alert("Passwords do not match")
            );

    }

        return (
          <>
        <View style={styles.root}> 
            <View style={{alignSelf: "flex-start", marginTop: 70}}>
        <Pressable
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: '#50C878',
              width: 35,
              height: 35,
              borderRadius: 17,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 2,
              marginTop:-10,
              marginBottom:10,
            }}
          >
            <Ionicons name="chevron-back-outline" size={20} color="white"  />
          </Pressable>
          </View> 

          <Text style={{fontSize:25, marginTop:40}}> Register </Text>

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:70}}>
              <TextInput placeholder={"First Name"} value={first_name} onChangeText={onChangeFirstNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
            </View>

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
            <TextInput placeholder={"Last Name"} value={last_name} onChangeText={onChangeLastNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
            </View>

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
            <TextInput placeholder={"Email"} value={email} onChangeText={onChangeEmailHandler}  style={{ flex:1, paddingVertical:0,}} keyboardType="email-address" />
            </View>

            <Text style={{fontSize:11, marginTop:16}}> Password must be longer than 5 characters and have a number. </Text>
           

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
            <TextInput placeholder={"Password"} value={passwordHash} onChangeText={onChangePasswordHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" secureTextEntry={true} />
            </View>
            

            
            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:15, marginTop:20}}>
            {/* <Text style={{fontSize:12, marginTop:0, }}> Verify Password: </Text> */}
            <TextInput placeholder={"Verify Password"} value={passwordCheck} onChangeText={onChangePasswordCheckHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" secureTextEntry={true} />
            </View>

            <TouchableOpacity style={styles.formButtons}>
                   <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>  

              </View>


{/* 
                   <Button
                   title="Submit"
                   onPress={onSubmitFormHandler}
                   /> */}
          </>
        )
      }
      
      export default Register;
      
      
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
      formButtons:{
          backgroundColor: '#50C878',
          width: '90%',
          padding: 10,
          marginVertical: 5,
          marginTop:35,
  
          alignItems: 'center',
          borderRadius: 5,
          marginTop:60,
      },
      linkText:{
          fontWeight:'bold',
          color:'white'
      },
         container: {
            paddingTop: 23
         },
         input: {
            margin: 15,
            marginLeft: 30,
            marginRight:30,
            paddingLeft: 10,
            height: 40,
            fontWeight: 'bold',
            borderColor: '#50c864',
            borderWidth: 0.75
         },
         
         buttonText:{
          padding: 10,
          textAlign: "center",
          fontWeight:'bold',
          color:'white',
         },
         title:{
            // color:'#50c864',
            // fontWeight: 'bold',
            textAlign: "center",

            marginTop: 25,
            fontSize:30,
            // borderColor: '#50c864',
            // borderWidth: 4,
            // borderRadius: 10,
            padding: 10,
            marginBottom: 15
          
        //    marginTop: 20,
        //    borderColor: '#50c864',
        //    borderWidth: 4,
       //     borderRadius: 10,
        //    padding: 10,
       //     marginBottom: 10
      //   },
      //   subtitles: {
      //    marginTop:15,
      //    fontWeight: 'bold'

         }
      })
      
      