import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from '../components/stylesR'
import Header from '../components/header'
import RestaurantData from "../data/RestaurantData";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantsView from './RestaurantsView'
import FoodEditView from "./FoodEditView";

const RestaurantOwnerView = (props) => {
  const restaurant = props.restaurant;
  const navigation = useNavigation();
  const storeData = RestaurantData;
  return (
    
    <ScrollView style={{ backgroundColor:"#fff"}}>
        <View style={{width: '100%', marginTop:200, flow:1, padding:15 }}>
           <View id="header">
             {/* <Header /> */}
           </View>        
           <View style={styles.adminBackground}>
          
           {/* <Text style={{alignSelf: "center", fontSize:"24px", marginBottom:10}}> RESTAURANT OWNER VIEW </Text> */}
           
            <TouchableOpacity style={stylesR.ROButtons}
                onPress={() => navigation.navigate('RestaurantOwnerOrders')}>
                <Text style={stylesR.ROButtonText}> View my Orders </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesR.ROButtons}
                onPress={() => navigation.navigate('FoodEditView')}>
                <Text style={stylesR.ROButtonText}> Edit My Food Options </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesR.ROButtons}
                onPress={() => navigation.navigate('FoodInsertView')}>
                <Text style={stylesR.ROButtonText}> Insert New Food </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesR.ROButtons}
                onPress={() => navigation.navigate('RestaurantInsertView')}>
                <Text style={stylesR.ROButtonText}> Insert New Restaurant </Text>
            </TouchableOpacity>


            <View>
                
            {/* <RestaurantsView/> */}
            </View>


           </View>

        
        </View>
        </ScrollView>
  )
}

export default RestaurantOwnerView

const styles = StyleSheet.create({})
