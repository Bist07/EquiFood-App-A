import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from './stylesR'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UpdateRequest } from '../API/RestaurantAPI'

const RequestsCard = (data) => {
  const navigation = useNavigation();
  const restaurant = data.item

  return (
    <View style={stylesR.card}>
      <View style={stylesR.borders}>
        <Image style={stylesR.imageStyle} source={{ uri: restaurant.ImageURL }} />
        <TouchableOpacity>
          <Pressable
            onPress={() => {
              UpdateRequest(restaurant.id, 'accepted');
              alert("restaurant request accepted");
            }}
          >
            <Feather name="check-square" size={22} color="#50C878" style={{ margin: 10, padding: 10, borderColor: '#ccc', borderWidth: 1 }} />
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable
            onPress={() => {
              UpdateRequest(restaurant.id, 'declined');
              alert("restaurant request declined");
            }}
          >
            <MaterialCommunityIcons name="delete-forever-outline" size={28} color="#DC143C" style={{ margin: 10, padding: 7, borderColor: '#ccc', borderWidth: 1 }} />
          </Pressable>
        </TouchableOpacity>
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
    </View >
  );
};

export default RequestsCard;

const styles = StyleSheet.create({});
