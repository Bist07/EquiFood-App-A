import { useNavigation } from '@react-navigation/native'
import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';
import bcrypt from 'bcryptjs';
import isaac from "isaac";


//fallback for hash api
bcrypt.setRandomFallback((len) => {
	const buf = new Uint8Array(len);

	return buf.map(() => Math.floor(isaac.random() * 256));
});

var salt = bcrypt.genSaltSync(10);

//declaring constants
    const RegisterRO = () => {
       const navigation = useNavigation();
       const [first_name, setFirstname] = useState('');
       const [last_name, setLastName] = useState('');
       const [email, setEmail] = useState('');
       const [passwordHash, setPassword] = useState('');
       const [passwordCheck, setPasswordCheck] = useState('');
    
      //These functions update the constants as data is entered into the input forms
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


      //validates entered values and sends data to back end
      const onSubmitFormHandler = async (e) => {

        //hashes password
        var hash = bcrypt.hashSync(passwordHash, salt);

        //checking if password is valid
        if(passwordCheck == passwordHash ){
            if(passwordCheck.length > 4){
                if(hasNumber.test(passwordCheck) == true){
                    
          try {
            const data = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                passwordHash: hash
            };
            //sending form data to router
            console.log(JSON.stringify(data));
            const response = await axios({
              url: `${config.local.url}:${config.local.port}/RestaurantOwner/Register`,
              method:'post',
              data:data,
              headers: {
                'Content-Type': 'application/json'
                 },
                });
                navigation.navigate('RestaurantOwnerLogIn');
                alert("Account Created!");
                
          } catch (error) {
            console.log(error);
            alert("An error has occurred");
          }
        }else(alert("Password must include a number"));
        }else(alert("Password must be at least 5 characters"));
        }else(alert("Passwords do not match"));
    }
        //Page Front end and styling below
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

          <Text style={{fontSize:22, marginTop:35}}> Enter Your Restaurant Information</Text>


            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:70}}>
            <TextInput autoCapitalize='none' placeholder={"First Name"} value={first_name} onChangeText={onChangeFirstNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
            </View>

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
            <TextInput autoCapitalize='none' placeholder={"Last Name"} value={last_name} onChangeText={onChangeLastNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
            </View>

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
            <TextInput autoCapitalize='none' placeholder={"Email"} value={email} onChangeText={onChangeEmailHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="email-address" />
            </View>

            <Text style={{fontSize:11, marginTop:16}}> Password must be longer than 5 characters and have a number. </Text>
           

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
            <TextInput autoCapitalize='none' placeholder={"Password"} value={passwordHash} onChangeText={onChangePasswordHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" secureTextEntry={true} />
            </View>

            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:45, marginTop:20}}>
            <TextInput autoCapitalize='none' placeholder={"Verify Password"} value={passwordCheck} onChangeText={onChangePasswordCheckHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" secureTextEntry={true} />
            </View>



            <View style={{display:'flex', flexDirection:"row", justifyContent:"space-evenly"}}>
                <TouchableOpacity style={styles.formButtons} onPress={onSubmitFormHandler}>
                  <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>   
            </View>
                
            <View style={{display:'flex', flexDirection:"row", justifyContent:"space-evenly"}}>
                 <TouchableOpacity style={styles.formButtons}
                  onPress={() => navigation.navigate('RestaurantInsertView')}> 
                      <Text style={styles.buttonText}> Reset </Text>
                 </TouchableOpacity> 
            </View>
           
            </View> 
          </>
        )
      }
      
      export default RegisterRO;
      
      
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
          width: '80%',
          padding: 7,
          marginVertical: 5,
          marginTop:12,
  
          alignItems: 'center',
          borderRadius: 5,
          
      },
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
         buttonText:{
          padding: 10,
          textAlign: "center",
          fontWeight:'bold',
          color:'white',
         },

      })