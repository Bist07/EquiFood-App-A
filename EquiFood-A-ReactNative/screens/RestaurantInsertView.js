import { useNavigation } from '@react-navigation/native'
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import ImagePickerButton from '../components/ImagePicker'
import { uploadFile } from '../API/ImageAPI'

const RestaurantInsertView = () => {
  const navigation = useNavigation();
  const [hours, setHours] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [file, setFile] = useState();
  const [name, setName] = useState('');

  const onChangeHoursHandler = (hours) => {
    setHours(hours);
  };

  const onChangeAddressHandler = (address) => {
    setAddress(address);
  };

  const onChangeCuisineHandler = (cuisine) => {
    setCuisine(cuisine);
  };

  const onChangeNameHandler = (name) => {
    setName(name);
  };

  const onSubmitFormHandler = async (e) => {
    const data = {
      address: address,
      hours: hours,
      cuisine: cuisine,
      name: name,
      ImageURL: ''
    };
    await uploadFile(name, file, 'restaurant', data)
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


          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:70}}>
          <TextInput placeholder={"Restaurant Name"} value={name} onChangeText={onChangeNameHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
          </View>

          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
          <TextInput placeholder={"Address"} value={address} onChangeText={onChangeAddressHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>      

          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
          <TextInput placeholder={"Cuisine"} value={cuisine} onChangeText={onChangeCuisineHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
         </View>     

          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
          <TextInput placeholder={"Hours"} value={hours} onChangeText={onChangeHoursHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View> 

          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25, marginTop:20}}>
          <TextInput placeholder={"Address"} value={address} onChangeText={onChangeAddressHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View> 


          <View>
          <Text style={{ marginBottom: 5 }}>Image</Text>
          <View style={styles.inputForm}>
            {<ImagePickerButton callback={setFile} />}
          </View>
        </View>

        {/* <View>
          <Text style={{ marginBottom: 5 }}>Restaurant Name</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Restaurant Name"} value={name} onChangeText={onChangeNameHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
          </View>
        </View> */}

        {/* <View>
          <Text style={{ marginBottom: 5 }}>Address</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Address"} value={address} onChangeText={onChangeAddressHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View> */}

        {/* <View>
          <Text style={{ marginBottom: 5 }}>Cuisine</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Cuisine"} value={cuisine} onChangeText={onChangeCuisineHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View> */}
{/* 
        <View>
          <Text style={{ marginBottom: 5 }}>Hours</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Hours"} value={hours} onChangeText={onChangeHoursHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View> */}

        {/* <View>
          <Text style={{ marginBottom: 5 }}>Image</Text>
          <View style={stylesR.inputForm}>
            {<ImagePickerButton callback={setFile} />}
          </View>
        </View> */}
        <View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
            <TouchableOpacity style={stylesR.ROFormButtons} >
              <Button
                title="Submit"
                onPress={onSubmitFormHandler}
                style={{ "backgroundColor": "gray", "margin": 2 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={stylesR.ROFormButtons}
              onPress={() => navigation.navigate('RestaurantInsertView')}>
              <Button title="Reset" style={stylesR.ROButtonText}></Button>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </>
  )
}

export default RestaurantInsertView;


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
   inputForm: {
    flexDirection:'row',
    borderColor:'#ccc', 
    borderWidth:2, 
    padding:8, 
    marginBottom:25,
    paddingBottom:8, 
    width: "100%",
},

})