import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import FoodEditCard from '../components/FoodEditCard'
import React, { useState, useEffect } from "react";
import { getMenu } from '../API/MenuAPI';
import stylesR from '../components/stylesR';

const FoodEditView = () => {
  const navigation = useNavigation();
  var fake_id = 1;

  //Should be getting id from login. maybe store in redux store?
  const restaurant_id = fake_id;

  const [foods, setFoods] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const result = await getMenu(restaurant_id);
      setFoods(result)
    }
    fetchData();
  }, []);


  return (
    <View style={{backgroundColor: "#fff", height: "100%"}}>
      {/* <Header/> */}
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
          marginTop: 90,
          marginBottom:10 
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>

      <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, marginTop: 10, marginBottom:60 }}>Edit Food View</Text>
      </View>
      
      <ScrollView style={{backgroundColor: "#fff", marginLeft:30, marginRight:30}}>
                {foods.map((item, i) => (
          <FoodEditCard food={item} key={i} />
        ))}
      </ScrollView>

    </View>
  )
}

export default FoodEditView

const styles = StyleSheet.create({})