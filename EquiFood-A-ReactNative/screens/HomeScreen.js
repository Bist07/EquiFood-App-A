import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../components/Categories";
import ItemComponent from "../components/ItemComponent";
import RestaurantData from "../data/RestaurantData";
import Restaurants from "../components/Restaurants";

const HomeScreen = () => {
  const storeData = RestaurantData;
  return (
    <ScrollView style={{marginTop:45, backgroundColor:"#F0F0F0"}}>
      <View style={{margin:10}}>
        <View id="searchbar"
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FAF9F6",
            padding:7,
            borderRadius:6,
          }}
        >
          <AntDesign name="search1" size={20} color="#008B8B" />
          <TextInput style={{paddingLeft:5}} placeholder="Restaurant name, cuisines, or a dish"></TextInput>
        </View>

        {/* <Categories/> */}
        {/* <ItemComponent/> */}
        <View>
          <Text style={{fontSize:17, fontWeight:'bold', padding:4 }}>Restaurants</Text>
        </View>

        <View>
          {storeData.map((store, index) => <Restaurants key={index} restaurant={store}/>)}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
