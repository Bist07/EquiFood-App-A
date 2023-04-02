import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from './stylesR'

// This is the functionality and design of each restaurant request card (for the page that lists all restaurants requests).

const RequestsCard = (data) => {
  const navigation = useNavigation();
  const restaurant = data.item
  console.log(data)

  return (
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
    </View>
  );
};

export default RequestsCard;

const styles = StyleSheet.create({});