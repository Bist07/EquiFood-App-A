import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from './stylesR'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RequestsCard = (data) => {
  const navigation = useNavigation();
  const restaurant = data.item
  console.log(data)

  const UpdateRequest = (id, status) => {

  }


  return (
    <View style={stylesR.card}>
      <View style={stylesR.borders}>
        <Image style={stylesR.imageStyle} source={{ uri: restaurant.ImageURL }} />
        <TouchableOpacity>
          <Pressable
            onPress={() => UpdateRequest(data.id, 'accepted')}
          >
            <Feather name="check-square" size={22} color="#50C878" style={{ margin: 10, padding: 10, borderColor: '#ccc', borderWidth: 1 }} />
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable
            onPress={() => UpdateRequest(data.id, 'declined')}
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
    </View>
  );
};

export default RequestsCard;

const styles = StyleSheet.create({});
