import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import stylesR from '../components/stylesR'
import Header from '../components/header'
import InputForm from '../components/InputForm'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import RestaurantData from '../data/RestaurantData'
import FoodCard from '../components/FoodCard'
import FoodEditCard from '../components/FoodEditCard'

const FoodEditView = () => {
  const navigation = useNavigation();
  const restaurantData = RestaurantData[0];
  const foods = restaurantData.menu;
  console.log(foods);

  return (
    <View style={{paddingTop:25}}>
      <Header/>
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

    </View>
  )
}

export default FoodEditView

const styles = StyleSheet.create({})