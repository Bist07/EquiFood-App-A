import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import ProfilePage from "./ProfilePage";
// This page displays all restaurant data in one page.

const RestaurantsView = () => {
  const [storeData, setStoreData] = useState([]);
  const getRestaurants = async () => {
    try {
      const response = await axios.get('http://192.168.0.36:5001/Restaurant');
      setStoreData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <ScrollView style={{ marginTop: 45, backgroundColor: "#fff" }}>
        <View style={{ width: '100%', backgroundColor: "#fff" }}>
          <View id="header">
            <Header />
          </View>
        </View>
        <View style={{ marginTop: 30, }}>
          <View id="searchbar"
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FAF9F6",
              borderWidth: 0.2,
              borderColor: "#e8e8e8",
              padding: 11,
              borderRadius: 12,
              marginLeft: 27,
              marginRight: 27,
            }}
          >
            <AntDesign name="search1" size={20} color="gray" />
            <TextInput style={{ paddingLeft: 5 }} placeholder="Restaurant name, cuisines, or a dish"></TextInput>
          </View>
          <View>
            {/* <Text style={{fontSize:17, fontWeight:'bold', padding:4 }}>Restaurants</Text> */}
          </View>

          <View style={{ marginLeft: 40, marginRight: 40, marginTop: 30 }}>
            {storeData.map((item, index) => <RestaurantCard key={index} item={item} />)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantsView;

const styles = StyleSheet.create({});
