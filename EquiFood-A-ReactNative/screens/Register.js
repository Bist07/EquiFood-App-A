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
        
    
      
      
      
        const onSubmitFormHandler = async (e) => {
       
          




          try {
            const data = {
                first_name: first_name,
                last_name: last_name,
                email: email
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
        

            
          } catch (error) {
            console.log(error);
            alert("An error has occurred");
          }
        }
        
        return (
          <>
            <View style={{paddingTop:20}} id="header">
                   {/* <Header /> */}
            </View>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "#006A4E",
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="white" />
            </Pressable>   
            <ScrollView style={stylesR.FoodInsertView}>
      
               <Text style={styles.title}>Enter Your Information</Text>
             
      
              <View>
                <Text style={{marginBottom:5}}>First Name</Text>
                <View style={styles.input}>
                    <TextInput placeholder={"First Name"} value={first_name} onChangeText={onChangeFirstNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
                </View>
              </View>
      
              <View>
                <Text style={{marginBottom:5}}>Last Name</Text>
                <View style={styles.input}>
                    <TextInput placeholder={"Last Name"} value={last_name} onChangeText={onChangeLastNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
                </View>
              </View>
      
              <View>
                <Text style={{marginBottom:5}}>Email</Text>
                <View style={styles.input}>
                    <TextInput placeholder={"Email"} value={email} onChangeText={onChangeEmailHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
                </View>
              </View>
      
              
      
              
      
              <View>
                
                
                 
                   <TouchableOpacity style={stylesR.ROFormButtons}>
                   <Button
                   title="Submit"
                   onPress={onSubmitFormHandler}
                   
                 />
                   </TouchableOpacity>   
            
                
                <View style={{display:'flex', flexDirection:2, justifyContent:"space-evenly"}}>
                 
                  <TouchableOpacity style={stylesR.ROFormButtons}
                  onPress={() => navigation.navigate('RestaurantInsertView')}> 
                      <Button title="Reset" style={stylesR.ROButtonText}></Button>
                  </TouchableOpacity> 
                </View>
      
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
            marginLeft: 10,
            paddingLeft: 10,
            height: 40,
            fontWeight: 'bold',
            borderColor: '#50c864',
            borderWidth: 2
         },
         submitButton: {
            backgroundColor: '#50c864',
            padding: 10,
            fontWeight: 'bold',
            margin: 15,
            height: 40,
         },
         submitButtonText:{
            color: 'white'
         },
         title:{
            color:'#50c864',
            fontWeight: 'bold',
            textAlign: "center",
            marginTop: 50,
            borderColor: '#50c864',
            borderWidth: 4,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10
          
         }
      })
      
      