import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import RestaurantData from '../data/RestaurantData'
import FoodEditCard from '../components/FoodEditCard'
import React, { useState, useEffect } from "react";
import { getMenu } from '../API/MenuAPI';

const FoodEditView = () => {
  const navigation = useNavigation();
  var fake_id = 2;

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
    <View style={{ paddingTop: 25 }}>
      {/* <Header/> */}
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

      <View>
        {foods.map((item, i) => (
          <FoodEditCard food={item} key={i} />
        ))}
      </View>

    </View>
  )
}

export default FoodEditView

const styles = StyleSheet.create({})