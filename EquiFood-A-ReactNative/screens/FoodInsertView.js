import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import Header from '../components/header'
import InputForm from '../components/InputForm'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';
import { insertFood } from '../API/MenuAPI'

const FoodInsertView = () => {
  const navigation = useNavigation();
  const [foodName, setFoodName] = useState('');
  const [ogPrice, setOgPrice] = useState(0);
  const [discPrice, setDiscPrice] = useState(0);
  const [servings, setServings] = useState(0);
  const [image, setImage] = useState('');

  const restaurantId = 1;

  // const axios = require('axios');

  // Tried using formData, didn't work :(
  // var data = new FormData();
  // data.append('item_name', foodName);
  // data.append('price', discPrice);
  // data.append('restaurant', 1);
  // data.append('original_price', ogPrice);
  // data.append('quantity', servings);

  const onChangeNameHandler = (name) => {
    setFoodName(name);
  };

  const onChangePriceHandler = (price) => {
    setOgPrice(price);
  };

  const onChangeDiscPriceHandler = (dPrice) => {
    setDiscPrice(dPrice);
  };

  const onChangeServingsHandler = (servings) => {
    setServings(servings);
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
        item_name:foodName,
        discPrice:discPrice,
        restaurantId:restaurantId,
        ogPrice: ogPrice,
        servings: servings,
      };
      console.log(JSON.stringify(data));
      // const response = await axios.post(`${config.local.url}:${config.local.port}/FoodInsert`, data );
      const response = await axios({
        url: `${config.local.url}:${config.local.port}/FoodInsert`,
        method:'post',
        data:data,
        headers: {'Authorization': 'ASDFG'}} );
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        setFullName('');
        setEmail('');
      } else {
        throw new Error("An error has occurred");
      }
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
        <Text style={{marginBottom:5}}>Food Name</Text>
        <View style={stylesR.inputForm}>
            <TextInput placeholder={"Food Name"} value={foodName} onChangeText={onChangeNameHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
        </View>
      </View>

      <View>
        <Text style={{marginBottom:5}}>Original Price</Text>
        <View style={stylesR.inputForm}>
            <TextInput placeholder={"Original Price"} value={ogPrice} onChangeText={onChangePriceHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
        </View>
      </View>

      <View>
        <Text style={{marginBottom:5}}>Discounted Price</Text>
        <View style={stylesR.inputForm}>
            <TextInput placeholder={"Discounted Price"} value={discPrice} onChangeText={onChangeDiscPriceHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
        </View>
      </View>

      <View>
        <Text style={{marginBottom:5}}>Servings Available</Text>
        <View style={stylesR.inputForm}>
            <TextInput placeholder={"Servings Available"} value={servings} onChangeText={onChangeServingsHandler}  style={{ flex:1, paddingVertical:0}} keyboardType="numeric" />
        </View>
      </View>

      <View>
        <Text style={{marginBottom:5}}>Image</Text>
        <View style={stylesR.inputForm}>
            <TextInput placeholder={"Image URL"} value={image} onChangeText={setImage}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
        </View>
      </View>
      <View>
        
        <Button
            title="Submit"
            onPress={onSubmitFormHandler}
            style={{"backgroundColor": "gray", padding: 100}}
          />
        
        <View style={{display:'flex', flexDirection:2, justifyContent:"space-evenly"}}>
          <TouchableOpacity style={stylesR.ROFormButtons}>
            
              {/* <Text style={stylesR.ROButtonText}>Insert Food</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={stylesR.ROFormButtons}>
              <Text style={stylesR.ROButtonText}>Reset</Text>
          </TouchableOpacity> 
        </View>

        </View>
      </ScrollView>
    </>
  )
}

export default FoodInsertView

const styles = StyleSheet.create({})