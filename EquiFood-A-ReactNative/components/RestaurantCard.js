import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from './stylesR'

// This is the functionality and design of each restaurant CARD (for the page that lists all restaurants).


const RestaurantCard = (data) => {
  const navigation = useNavigation();
  const restaurant = data.item

  return (
    <Pressable onPress={() => navigation.navigate("RestaurantPage", {
      id: restaurant.id,
      name: restaurant.name,
      uri: restaurant.ImageURL,
      address: restaurant.address,
      cuisines: restaurant.cuisine,
      hours: restaurant.hours,
      rating: restaurant.rating,
    })}>

      <View style={stylesR.card}>
        <View style={stylesR.borders}>
          <Image style={stylesR.imageStyle} source={{ uri: restaurant.ImageURL }} />
          <View style={stylesR.rating}>
            <Text style={stylesR.ratingText}> {restaurant.rating} </Text>
            <AntDesign name="star" size={18} color="gold" />
          </View>

        </View>

        <View style={stylesR.descriptionCard}>
          <View>
            <Text style={stylesR.restaurantName}>
              {restaurant.name}
            </Text>
            <Text style={stylesR.restaurantHours}>
              {restaurant.hours}
            </Text>
          </View>


        </View>

        {/* <View
          style={stylesR.foodCount}>
          <Text># of Food Placeholder</Text>
        </View> */}
      </View>

      {/* <View
        style= {stylesR.betweenCardBreak}>
        <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 1 }} />
      </View> */}
    </Pressable>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});