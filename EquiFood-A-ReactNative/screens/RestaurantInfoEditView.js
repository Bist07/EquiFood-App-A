import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FoodCard from '../components/FoodCard'
import Header from '../components/header'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import stylesR from '../components/stylesR'
import InputForm from '../components/InputForm'
import RestaurantData from '../data/RestaurantData'

const RestaurantInfoEditView = () => {
  const navigation = useNavigation();

  //Get data from json file, id=0 for subway
  const data = RestaurantData[0];
  return (
    <View>
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
        <InputForm placeholder="Restaurant Name" title={"Food Name (Currently: "+ data.name+")"} />
        <InputForm placeholder="Address" title={"Address (Currently: "+ data.address+")"}/>
        <InputForm placeholder="Cuisines" title={"Cuisines (Currently: "+ data.cuisines+")"}/>
        <InputForm placeholder="Hours" title={"Hours (Currently: "+ data.hours+")"}/>
        <View>

        <View style={{display:'flex', flexDirection:2, justifyContent:"space-evenly"}}>
          <TouchableOpacity style={stylesR.ROFormButtons}>
              <Text style={stylesR.ROButtonText}>Insert Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesR.ROFormButtons}>
              <Text style={stylesR.ROButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default RestaurantInfoEditView

const styles = StyleSheet.create({})