import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FoodCard from '../components/FoodCard'
import Header from '../components/header'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";

const RestaurantInfoEditView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{paddingTop:20}} id="header">
             <Header />
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
    </View>
  )
}

export default RestaurantInfoEditView

const styles = StyleSheet.create({})