import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import stylesR from '../components/stylesR'
import Header from '../components/header'
import InputForm from '../components/InputForm'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import RestaurantData from '../data/RestaurantData'
import FoodCard from '../components/FoodCard'

const FoodEditView = (item) => {
  const navigation = useNavigation();
  const restaurantData = RestaurantData[0];
  const route = useRoute();
  console.log(route.params);
  console.log(route.params.discountPrice);

  return (
    <View style={{ paddingTop: 25 }}>
      <Header />
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
        <InputForm title={"Food Name (Currently: " + route.params.name + ")"} placeholder="New Food Name" />
        <InputForm title={"Original Price (Currently: $" + route.params.originalPrice + ")"} placeholder="New Original Price" />
        <InputForm title={"Discount Price (Currently: $" + route.params.discountPrice + ")"} placeholder="New Discounted Price" />
        <InputForm title={"Discount Price (Currently: " + route.params.servingsLeft + ")"} placeholder="New Servings Available" />
        <InputForm title="Image URL" placeholder="New Image URL" />
        <ImagePickerButton />
        <View>

          <View style={{ display: 'flex', flexDirection: 2, justifyContent: "space-evenly" }}>
            <TouchableOpacity style={stylesR.ROFormButtons}>
              <Text style={stylesR.ROButtonText}> Confirm  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesR.ROFormButtons}>
              <Text style={stylesR.ROButtonText}> Reset </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default FoodEditView

const styles = StyleSheet.create({})