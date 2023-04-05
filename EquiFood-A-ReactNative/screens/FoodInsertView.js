import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import ImagePickerButton from '../components/ImagePicker'
import { InsertForm } from '../API/ImageAPI'

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

    const data = {
      item_name: foodName,
      price: discPrice,
      restaurant_id: restaurantId,
      ImageURL: '',
      original_price: ogPrice,
      quantity: servings,
    }

    await InsertForm(foodName, file, 'food', data)
  }

  return (
    <>
      <View style={{ paddingTop: 50 }} id="header">
        {/* <Header /> */}
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
          marginBottom:0
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>
      <ScrollView style={stylesR.FoodInsertView}>
        


        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 70 }}>
          <TextInput placeholder={"Food Name"} value={foodName} onChangeText={onChangeNameHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 20 }}>
          <TextInput placeholder={"Original Price"} value={ogPrice} onChangeText={onChangePriceHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 20 }}>
          <TextInput placeholder={"Discounted Price"} value={discPrice} onChangeText={onChangeDiscPriceHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, marginTop: 20 }}>
          <TextInput placeholder={"Servings Available"} value={servings} onChangeText={onChangeServingsHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
        </View>

        <View>
          <Text style={{marginTop:7, marginBottom: 5 }}>Image</Text>
          <View style={stylesR.inputForm}>
            {<ImagePickerButton callback={setFile} />}
          </View>
        </View>
        
        <View style= {{marginTop:10}}>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
          <TouchableOpacity style={stylesR.ROFormButtons} 
              onPress={() => navigation.navigate('RestaurantInsertView')}>
                {/* onPress={onSubmitFormHandler} */}
                <Text style={styles.buttonText}> Submit </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesR.ROFormButtons}
              onPress={() => navigation.navigate('FoodInsertView')}>
                <Text style={styles.buttonText}> Reset </Text>
            </TouchableOpacity>
          </View>

        </View>         
        
      </ScrollView>
    </>
  )
}

export default FoodInsertView
const styles = StyleSheet.create({

  buttonText: {
    padding: 10,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
  },
})