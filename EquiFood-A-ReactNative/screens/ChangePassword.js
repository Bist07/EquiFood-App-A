import { useNavigation } from '@react-navigation/native'
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const RestaurantInsertView = () => {
  const navigation = useNavigation();
  const [OldPassword, setOldPassword] = useState('');
  const [idnum, setidnum] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [PasswordCheck, setPasswordCheck] = useState('');
  const [OldPassCheck, setOldPassCheck] = useState('');
 

  const onChangeOldPasswordHandler = (OldPassword) => {
    setOldPassword(OldPassword);
  };

  const onChangeNewPasswordHandler = (NewPassword) => {
    setNewPassword(NewPassword);
  };

  const onChangePasswordCheckHandler = (PasswordCheck) => {
    setPasswordCheck(PasswordCheck);
  };

  const onChangeidnumHandler = (idnum) => {
    setidnum(idnum);
  };

  const onChangeOldPassCheckHandler = (OldPassCheck) => {
    setOldPassCheck(OldPassCheck);
  };




  useEffect(() => {
    getUser();
  }, [])

//Retrieving User state Object and parsing out userName
const getUser = async () => {
try {
    const savedUser = await AsyncStorage.getItem('user');
    let parsed = JSON.parse(savedUser)
    onChangeidnumHandler(parsed.id);
    console.log(idnum);
  
} catch (error) {
  console.log(error);
}

//gets old password to check against entered old password
try {
    const savedUser = await AsyncStorage.getItem('user');
    let parsed = JSON.parse(savedUser)
     onChangeOldPassCheckHandler(parsed.password);
    
  
} catch (error) {
  console.log(error);
}
};


  const onSubmitFormHandler = async (e) => {
    const data = {
      NewPassword:  bcrypt.hashSync(NewPassword, salt),
      idnum: idnum
    };

    console.log("Old Check: " + OldPassCheck);
    console.log("entered old pass: " + OldPassword);
    
    if(OldPassCheck == OldPassword){
        if(NewPassword == PasswordCheck){

    try {
        console.log(JSON.stringify(data));
        const response = await axios({
          url: `${config.local.url}:${config.local.port}/customer/ChangePassword`,
          method:'post',
          data:data,
          headers: {
            'Content-Type': 'application/json'
             },
            });
            console.log(data);
        
            alert("Password Updated!")
            navigation.navigate('AccountSettings');

      } catch (error) {
        console.log(error);
        alert("an error occured");
      }
    }else{
        alert("New Passwords do not match");
    }
    }else{
        alert("Old Password is Incorrect");
    }
  }

  return (
    <>
      <View style={styles.root}>
        <View style={{ alignSelf: "flex-start", marginTop: 70 }}>
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
              marginTop: -10,
              marginBottom: 10,
            }}
          >
            <Ionicons name="chevron-back-outline" size={20} color="white" />
          </Pressable>
        </View>

        <Text style={{fontSize:22, marginTop:35}}> Enter Your Old Password</Text>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 70 }}>
          <TextInput autoCapitalize='none' placeholder={"Old Password"} value={OldPassword} onChangeText={onChangeOldPasswordHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
        </View>

        <Text style={{fontSize:22, marginTop:35}}> Enter Your New Password</Text>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 70 }}>
          <TextInput autoCapitalize='none' placeholder={"New Password"} value={NewPassword} onChangeText={onChangeNewPasswordHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
        </View>


        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 70 }}>
          <TextInput autoCapitalize='none' placeholder={"Confirm Password"} value={PasswordCheck} onChangeText={onChangePasswordCheckHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
        </View>



        
       


        <View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
          <TouchableOpacity style={styles.formButtons} onPress={onSubmitFormHandler}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
           
          </View>
        </View>

      </View>
    </>
  )
}

export default RestaurantInsertView;


const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  formButtons: {
    backgroundColor: '#50C878',
    width: '80%',
    padding: 7,
    marginVertical: 5,
    marginTop: 12,
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
  buttonText: {
    padding: 10,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
  },
  inputForm: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 2,
    padding: 8,
    marginBottom: 25,
    paddingBottom: 8,
    width: "100%",
  },

})