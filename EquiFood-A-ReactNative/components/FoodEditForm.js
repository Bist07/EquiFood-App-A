import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import stylesR from '../components/stylesR'
import Header from '../components/header'
import InputForm from '../components/InputForm'
import React, { useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import ImagePickerButton from './ImagePicker'

const FoodEditForm = (item) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [image, setImage] = useState(null);
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
        <ImagePickerButton image={image} callback={setImage} />
        <View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
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

export default FoodEditForm

const styles = StyleSheet.create({})
