import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from "react";
import stylesR from '../components/stylesR'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import ImagePickerButton from './ImagePicker'
import { InsertForm } from '../API/ImageAPI'
import { UpdateFoodItem } from '../API/MenuAPI'
import { useEffect } from 'react';

const FoodEditForm = (item) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [foodName, setFoodName] = useState();
  const [ogPrice, setOgPrice] = useState();
  const [discPrice, setDiscPrice] = useState();
  const [servings, setServings] = useState();
  const [RfoodName, setRFoodName] = useState();
  const [RogPrice, setROgPrice] = useState();
  const [RdiscPrice, seRtDiscPrice] = useState();
  const [Rservings, setRServings] = useState();
  const [file, setFile] = useState(undefined);
  const [id, setID] = useState();
  const [RimageURL, setRImageURL] = useState();

  useEffect(() => {
    async function fetchData() {
      setID(route.params.id);
      setRImageURL(route.params.ImageURL);
      setRFoodName(route.params.name);
      setROgPrice(route.params.originalPrice);
      seRtDiscPrice(route.params.discountPrice);
      setRServings(route.params.servingsLeft);
    }
    fetchData();
  }, []);

  const onChangeNameHandler = (foodName) => {
    setFoodName(foodName);
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


    if (file === undefined) {
      const data = {
        id,
        item_name: foodName,
        price: discPrice,
        ImageURL: RimageURL,
        original_price: ogPrice,
        quantity: servings,
      }
      UpdateFoodItem(data);
    } else {
      const data = {
        id,
        item_name: foodName,
        price: discPrice,
        ImageURL: "",
        original_price: ogPrice,
        quantity: servings,
      }
      await InsertForm(foodName, file, 'editFood', data)
      console.log(id)
    }

    navigation.navigate('FoodEditForm');
  }
  return (
    <>
      <View style={{ paddingTop: 50 }} id="header">
      </View>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#50c864",
          width: 37,
          height: 37,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          marginTop: 30,
          marginBottom: 0
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>
      <ScrollView style={stylesR.FoodEditForm}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 70 }}>
          <TextInput placeholder={'Current name :' + RfoodName} value={foodName} onChangeText={onChangeNameHandler} style={{ flex: 1, paddingVertical: 0, paddingLeft: 10 }} keyboardType="default" />
        </View>
        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 20 }}>
          <TextInput placeholder={'Current original price :' + RogPrice} value={ogPrice} onChangeText={onChangePriceHandler} style={{ flex: 1, paddingVertical: 0, paddingLeft: 10 }} keyboardType="default" />
        </View>
        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 20 }}>
          <TextInput placeholder={'Current discounted price :' + RdiscPrice} value={discPrice} onChangeText={onChangeDiscPriceHandler} style={{ flex: 1, paddingVertical: 0, paddingLeft: 10 }} keyboardType="default" />
        </View>
        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 20 }}>
          <TextInput placeholder={'Current quantity :' + Rservings} value={servings} onChangeText={onChangeServingsHandler} style={{ flex: 1, paddingVertical: 0, paddingLeft: 10 }} keyboardType="default" />
        </View>
        <View>
          <Text style={{ marginTop: 7, marginBottom: 5, paddingLeft: 10 }}>Image</Text>
          <View style={stylesR.inputForm}>
            {<ImagePickerButton callback={setFile} />}
          </View>
        </View>

        <View style={{ marginTop: 10 }}>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
            <TouchableOpacity style={stylesR.ROFormButtons} onPress={(e) => onSubmitFormHandler(e)}>
              <Text style={styles.buttonText}> Submit </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesR.ROFormButtons}
              onPress={() => navigation.navigate('FoodEditForm')}>
              <Text style={styles.buttonText}> Reset </Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView >
    </>
  )
}

export default FoodEditForm
const styles = StyleSheet.create({

  buttonText: {
    padding: 10,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
  },
})