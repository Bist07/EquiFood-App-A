import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';
import ImagePickerButton from '../components/ImagePicker'

const FoodInsertView = () => {
  const navigation = useNavigation();
  const [foodName, setFoodName] = useState('');
  const [ogPrice, setOgPrice] = useState(0);
  const [discPrice, setDiscPrice] = useState(0);
  const [servings, setServings] = useState(0);
  const [file, setFile] = useState();
  const restaurantId = 1;

  const onChangeNameHandler = (name) => {
    setFoodName(name);
  };

  const onChangePriceHandler = (price) => {
    setOgPrice(parseFloat(price));
  };

  const onChangeDiscPriceHandler = (dPrice) => {
    setDiscPrice(parseFloat(dPrice));
  };

  const onChangeServingsHandler = (servings) => {
    setServings(parseInt(servings));
  };


  const onSubmitFormHandler = async (e) => {
    try {
      const data = {
        item_name: foodName,
        price: discPrice,
        restaurant_id: restaurantId,
        img: "iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        original_price: ogPrice,
        quantity: servings,
      };

      const formData = new FormData();

      if (file) {
        formData.append("image", file)
      }

      console.log(JSON.stringify(formData))


      const image_S3 = await axios({
        url: `${config.local.url}:${config.local.port}/Images/posts`,
        method: 'post',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      const response = await axios({
        url: `${config.local.url}:${config.local.port}/Menu/FoodInsert`,
        method: 'post',
        data: data,
        headers: {
          'Content-Type': 'application/json'
        },

      });

    } catch (error) {
      console.log(error.image_S3.data);
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
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>
      <ScrollView style={stylesR.FoodInsertView}>
        <View>
          <Text style={{ marginBottom: 5 }}>Food Name</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Food Name"} value={foodName} onChangeText={onChangeNameHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Original Price</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Original Price"} value={ogPrice} onChangeText={onChangePriceHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Discounted Price</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Discounted Price"} value={discPrice} onChangeText={onChangeDiscPriceHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Servings Available</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Servings Available"} value={servings} onChangeText={onChangeServingsHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Image</Text>
          <View style={stylesR.inputForm}>
            {<ImagePickerButton callback={setFile} />}
          </View>
        </View>
        <View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
            <TouchableOpacity style={stylesR.ROFormButtons}>

              <Button
                title="Submit"
                onPress={onSubmitFormHandler}
                style={{ "backgroundColor": "gray", "margin": 2 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={stylesR.ROFormButtons}
              onPress={() => navigation.navigate('FoodInsertView')}>
              <Button title="Reset" style={stylesR.ROButtonText}></Button>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </>
  )
}



export default FoodInsertView

const styles = StyleSheet.create({})