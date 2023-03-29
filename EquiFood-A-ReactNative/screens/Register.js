import { useNavigation } from '@react-navigation/native'
import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';



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
            <View style={{paddingTop:20}} id="header">
                   {/* <Header /> */}
            </View>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: '#50C878',
                width: 37,
                height: 37,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 14,
                marginTop:60,
              }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="white" />
            </Pressable>   
            <ScrollView style={stylesR.FoodInsertView}>
      
               <Text style={styles.title}>Register</Text>
             
      
              <View>

                <Text style={{marginTop: 20, marginBottom:0, fontWeight: "bold"}}>Name</Text>

            //    <Text style={styles.subtitles}>First Name</Text>

                <View style={styles.input}>
                    <TextInput placeholder={"First Name"} value={first_name} onChangeText={onChangeFirstNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
                </View>
              </View>
      
              <View>

                <Text style={{marginTop:-20}}></Text>

               // <Text style={styles.subtitles}>Last Name</Text>

                <View style={styles.input}>
                    <TextInput placeholder={"Last Name"} value={last_name} onChangeText={onChangeLastNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
                </View>
              </View>
      
              <View>

                <Text style={{marginTop: 15, marginBottom:0, fontWeight: "bold"}}>Email</Text>

              //  <Text style={styles.subtitles}>Email</Text>

                <View style={styles.input}>
                    <TextInput placeholder={"Email"} value={email} onChangeText={onChangeEmailHandler}  style={{ flex:1, paddingVertical:0,}} keyboardType="email-address" />
                </View>
              </View>

              <View>

                <Text style={{marginTop:10, fontWeight: "bold"}}>Password</Text>

          //      <Text style={styles.subtitles}>Password</Text>

                <View style={styles.input}>
                    <TextInput placeholder={"Password"} value={passwordHash} onChangeText={onChangePasswordHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" secureTextEntry={true} />
                </View>
                <Text style={{marginBottom: 20}}>Must be longer than 5 characters and have a number </Text>
                
              </View>

              <View>

                <Text style={{marginTop:-20}}></Text>

             //   <Text style={styles.subtitles}>Verify Password</Text>

                <View style={styles.input}>
                    <TextInput placeholder={"Verify Password"} value={passwordCheck} onChangeText={onChangePasswordCheckHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" secureTextEntry={true} />
                </View>
              </View>
      
              
      
              
      
              <View style={{marginTop:20}}>

                   <TouchableOpacity style={styles.formButtons}>
                   <Text style={styles.buttonText}>Submit</Text>

                   </TouchableOpacity>   
{/* 
                   <Button
                   title="Submit"
                   onPress={onSubmitFormHandler}
                   /> */}
            
                
                {/* <View style={{display:'flex', flexDirection:"row", justifyContent:"space-evenly"}}> */}
                 {/* Reset Button?: */}
                  {/* <TouchableOpacity style={styles.formButtons}
                  onPress={() => navigation.navigate('Register')}>  
                      <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>  */}
                {/* </View> */}
      
              </View>
            </ScrollView>
          </>
        )
      }
      
      export default Register;
      
      
      const styles = StyleSheet.create({
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
         formButtons: {
            backgroundColor: '#50C878',
            // width: '100%',
            padding: 6,
            // marginVertical: 5,
            marginTop:35,
            marginLeft: 60,
            marginRight:60,
            // alignItems: 'center',
            borderRadius: 5
            
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
      
      