import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantData from "../data/RestaurantData";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import ProfilePage from "./ProfilePage";
// This page displays all restaurant data in one page.

const RestaurantsView = () => {
  const storeData = RestaurantData;
  return (
    <View style={{ backgroundColor:"#fff"}}>
    <ScrollView style={{marginTop:45, backgroundColor:"#fff"}}>
     <View style={{width: '100%', backgroundColor:"#fff" }}>
        <View id="header">
          <Header />
        </View>
     </View>
      <View style={{margin:50, marginTop: 30, }}>
        <View id="searchbar"
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FAF9F6",
            padding:11,
            borderRadius:15,
          }}
        >
          <AntDesign name="search1" size={20} color="#17B169" />
          <TextInput style={{paddingLeft:5}} placeholder="Restaurant name, cuisines, or a dish"></TextInput>
        </View>
        <View>
          {/* <Text style={{fontSize:17, fontWeight:'bold', padding:4 }}>Restaurants</Text> */}
        </View>

        <View style={{marginTop:30}}>
          {storeData.map((item, index) => <RestaurantCard key={index} item={item}/>)}
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default RestaurantsView;

const styles = StyleSheet.create({});
