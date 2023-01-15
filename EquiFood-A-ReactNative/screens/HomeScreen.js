import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../components/Categories";
import ItemComponent from "../components/ItemComponent";
import RestaurantData from "../data/RestaurantData";
import Restaurants from "../components/Restaurants";

const HomeScreen = () => {
  const data = RestaurantData;
  return (
    <ScrollView style={{marginTop:45, backgroundColor:"#F0F0F0"}}>
      <View style={{margin:10}}>
        <View
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

        <Categories/>
        <ItemComponent/>
        
        <View>
          {data.map((item) => <Restaurants restaurant={item}/>)}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
