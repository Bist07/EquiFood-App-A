import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import stylesR from '../components/stylesR'
import Header from '../components/header'
import InputForm from '../components/InputForm'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";

const FoodInsertView = () => {
  const navigation = useNavigation();
  return (
    <>
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
      <ScrollView style={stylesR.FoodInsertView}>
        <InputForm placeholder="Food Name" title="Food Name"/>
        <InputForm placeholder="Original Price" title="Original Price"/>
        <InputForm placeholder="Discounted Price" title="Discounted Price"/>
        <InputForm placeholder="Servings Available" title="Servings Available"/>
        <InputForm placeholder="Image URL" title="Image URL"/>
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
    </>
  )
}

export default FoodInsertView

const styles = StyleSheet.create({})