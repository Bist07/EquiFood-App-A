import {StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from './stylesR'

// This is the functionality and design of each restaurant CARD (for the page that lists all restaurants).

const AdminRestaurantView = (props) => {
  const restaurant = props.restaurant;
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("RestaurantPage",{
      id:restaurant.id,
      name:restaurant.name,
      address:restaurant.address,
      cuisines:restaurant.cuisines,
    })}>
      <View style= {stylesR.adminBorders}>
        
      <View style= {stylesR.descriptionCard}>
          <View>
            <Text style= {stylesR.restaurantName}>
                {restaurant.name}
            </Text>
            <Text style= {stylesR.restaurantHours}>
                {restaurant.hours}
            </Text>
          </View>

          <View style= {stylesR.rating}>
  
          <Text
            style= {stylesR.ratingText}>
            ???
          </Text>
          <AntDesign name="star" size={24} color="gold" />
        </View>
      </View>
  
      </View>



    </Pressable>
  );
};

export default AdminRestaurantView;

const styles = StyleSheet.create({});