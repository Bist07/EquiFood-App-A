import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import ProfilePage from "./ProfilePage";
import { getRestaurants } from "../API/RestaurantAPI";
// This page displays all restaurant data in one page.

const RestaurantsView = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getRestaurants();
      setStoreData(result);
    }
    fetchData();
  }, []);

  return (
    <View style={{ backgroundColor: "#fff" }}>
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
              marginTop:20,
            }}
          >
            <AntDesign name="search1" size={20} color="gray" />
            <TextInput style={{ paddingLeft: 5 }} placeholder="Restaurant name, cuisines, or a dish"></TextInput>
      </View>
      <ScrollView style={{ marginTop: 10, backgroundColor: "#fff" }}>
        <View style={{ width: '100%', backgroundColor: "#fff" }}>
          <View id="header">
            {/* <Header /> */}
          </View>
        </View>
        <View style={{ marginTop: 10, }}>

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
