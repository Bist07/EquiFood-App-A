import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from './stylesR'
import { Buffer } from 'buffer';

// This is the design of each Order card. Restaurant Owner gets here by clicking on an OrderSummaryCard

const OrderCard = (data) => {
  const navigation = useNavigation();
  const menuItem = data.item;

  return (
    <Pressable>

      <View style={stylesR.card}>
        <View style={stylesR.borders}>
          <Text></Text>
        </View>

        <View style={stylesR.descriptionCard}>
          <View>
            <Text style={stylesR.restaurantName}>
              {menuItem.item_name}
            </Text>
            <Text style={stylesR.restaurantHours}>
              
            </Text>
          </View>

        </View>

        <View
          style={styles.count}>
          <Text>x{menuItem.qty_ordered}</Text>
        </View>
      </View>

    </Pressable>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
    count:{
        position: "absolute",
        right: 7,
        top: 25,
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
    },
});