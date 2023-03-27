
import { useNavigation } from '@react-navigation/native'
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';
import ImagePickerButton from '../components/ImagePicker'
import { uploadFile } from '../API/ImageAPI'

const RestaurantInsertView = () => {
  const navigation = useNavigation();
  const [hours, setHours] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState('');
  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState('');
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

        address: address,
        hours: hours,
        cuisine: cuisine,
        rating: rating,
        longitude: longitude,
        latitude: latitude,
        name: name
      };
      console.log(JSON.stringify(data));
      // const response = await axios.post(`${config.local.url}:${config.local.port}/FoodInsert`, data );
      const response = await axios({
        url: `${config.local.url}:${config.local.port}/Restaurant/insertRestaurant`,
        method: 'post',
        data: data,
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
      <View style={{ paddingTop: 50 }} id="header">
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
          marginTop: 30,
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>
      <ScrollView style={stylesR.FoodInsertView}>

        <Text style={styles.title}>Enter Restaurant Information</Text>


        <View>
          <Text style={{ marginBottom: 5 }}>Address</Text>
          <View style={styles.input}>
            <TextInput placeholder={"Address"} value={address} onChangeText={onChangeAddressHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Hours of Operation</Text>
          <View style={styles.input}>
            <TextInput placeholder={"Hours"} value={hours} onChangeText={onChangeHoursHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Cuisine Style</Text>
          <View style={styles.input}>
            <TextInput placeholder={"Cusine"} value={cuisine} onChangeText={onChangeCuisineHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Rating</Text>
          <View style={styles.input}>
            <TextInput placeholder={"Rating"} value={rating} onChangeText={onChangeRatingHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
          </View>
        </View>



        <View>
          <Text style={{ marginBottom: 5 }}>Longitude</Text>
          <View style={styles.input}>
            <TextInput placeholder={"Longitude"} value={longitude} onChangeText={onChangeLongitudeHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Latitude</Text>
          <View style={styles.input}>
            <TextInput placeholder={"Latitude"} value={latitude} onChangeText={onChangeLatitudeHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Restaurant's Name</Text>
          <View style={styles.input}>
            <TextInput placeholder={"Name"} value={name} onChangeText={onChangeNameHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>



          <TouchableOpacity style={stylesR.ROFormButtons}
            onPress={() => onPress = { onSubmitFormHandler }}>
            <Button title="Submit" style={stylesR.ROButtonText}></Button>
          </TouchableOpacity>

          <View style={{ display: 'flex', flexDirection: 2, justifyContent: "space-evenly" }}>

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
    borderWidth: 2
  },
  submitButton: {
    backgroundColor: '#50c864',
    padding: 10,
    fontWeight: 'bold',
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  },
  title: {
    color: '#50c864',
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

