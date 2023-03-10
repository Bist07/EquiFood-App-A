
import { useNavigation } from '@react-navigation/native'
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';
import { restaurant } from '../API/MenuAPI'




const RestaurantInsertView = () => {
  const navigation = useNavigation();
  const [hours, setHours] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState('');
  const [img_id, setImg_Id] = useState('');
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [name, setName] = useState('');
  

  // const axios = require('axios');

  // Tried using formData, didn't work :(
  // var data = new FormData();
  // data.append('item_name', foodName);
  // data.append('price', discPrice);
  // data.append('restaurant', 1);
  // data.append('original_price', ogPrice);
  // data.append('quantity', servings);

  

  const onChangeHoursHandler = (hours) => {
   setHours(hours);
 };

   const onChangeAddressHandler = (address) => {
  setAddress(address);
 };

   const onChangeCuisineHandler = (cuisine) => {
   setCuisine(cuisine);
 };

 const onChangeRatingHandler = (rating) => {
   setRating(rating);
  };

  const onChangeImg_IdHandler = (img_id) => { //int
   setImg_Id(img_id);
   };

 const onChangeLongitudeHandler = (longitude) => { //int
   setLongitude(longitude);
   };

 const onChangeLatitudeHandler = (latitude) => { //int
   setLatitude(latitude);
   };

 const onChangeNameHandler = (name) => {
   setName(name);
   };



  const onSubmitFormHandler = async (e) => {
    // if (!foodName.length == 0) {
    //   alert("Food Name is blank");
    //   return;
    // }
    // if (discPrice < 0 || ogPrice < 0 || servings < 0) {
    //   alert("Numbers can't be negative");
    //   return;
    // }
    try {
      const data = {
        
        address:address,
        hours:hours,
        cuisine:cuisine,
        rating: rating,
        img_id: img_id,
        longitude: longitude,
        latitude: latitude,
        name: name
      };
      console.log(JSON.stringify(data));
      // const response = await axios.post(`${config.local.url}:${config.local.port}/FoodInsert`, data );
      const response = await axios({
        url: `${config.local.url}:${config.local.port}/Restaurant/insertRestaurant`,
        method:'post',
        data:data,
        headers: {
          'Content-Type': 'application/json'
           },
          // body: JSON.stringify(data),
          });
      // if (response.status === 201) {
      //   alert(` You have created: ${JSON.stringify(response.data)}`);
      //   setFoodName('');
      //   setOgPrice(0);
      //   setDiscPrice(0);
      //   setServings(0);
      // } else {
        // throw new Error("An error has occurred from response");
      
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
       

        <View>
          <Text style={{marginBottom:5}}>Address</Text>
          <View style={stylesR.inputForm}>
              <TextInput placeholder={"Address"} value={address} onChangeText={onChangeAddressHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{marginBottom:5}}>Hours of Operation</Text>
          <View style={stylesR.inputForm}>
              <TextInput placeholder={"Hours"} value={hours} onChangeText={onChangeHoursHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{marginBottom:5}}>Cuisine Style</Text>
          <View style={stylesR.inputForm}>
              <TextInput placeholder={"Cusine"} value={cuisine} onChangeText={onChangeCuisineHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{marginBottom:5}}>Rating</Text>
          <View style={stylesR.inputForm}>
              <TextInput placeholder={"Rating"} value={rating} onChangeText={onChangeRatingHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
          </View>
        </View>

        <View>
          <Text style={{marginBottom:5}}>Restaurant Image ID</Text>
          <View style={stylesR.inputForm}>
              <TextInput placeholder={"Image ID"} value={img_id} onChangeText={onChangeImg_IdHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{marginBottom:5}}>Longitude</Text>
          <View style={stylesR.inputForm}>
              <TextInput placeholder={"Longitude"} value={longitude} onChangeText={onChangeLongitudeHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{marginBottom:5}}>Latitude</Text>
          <View style={stylesR.inputForm}>
              <TextInput placeholder={"Latitude"} value={latitude} onChangeText={onChangeLatitudeHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{marginBottom:5}}>Restaurant's Name</Text>
          <View style={stylesR.inputForm}>
              <TextInput placeholder={"Name"} value={name} onChangeText={onChangeNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
          </View>
        </View>

        <View>
          
          <Button
              title="Submit"
              onPress={onSubmitFormHandler}
              style={{"backgroundColor": "gray", "margin":2}}
            />
          
          <View style={{display:'flex', flexDirection:2, justifyContent:"space-evenly"}}>
            <TouchableOpacity style={stylesR.ROFormButtons}>
              
                {/* <Text style={stylesR.ROButtonText}>Insert Food</Text> */}
                
            </TouchableOpacity>
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

export default RestaurantInsertView;


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
      borderWidth: 1
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
   }
})

