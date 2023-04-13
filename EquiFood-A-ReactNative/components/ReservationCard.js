import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";
import stylesR from './stylesR'
import FoodEditForm from "./FoodEditForm";
import { useNavigation } from "@react-navigation/native";
import { Buffer } from 'buffer';

// Summary cards for Restaurant Owners to quickly give them an overview of each order. They must click them to get a detailed view
// Cards are shown in RestaurantOwnerOrders
const ReservationCard = ( data ) => {
  const navigation = useNavigation();
  const order = data.item;
  const dateTime = order.reservation_datetime.split("T");
  return (
    <Pressable
      style={stylesR.itemDisplay}
      >

      <View style={{ marginLeft: 10, flex: 1 }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.text}>
            Order Reserved At: {order.name}
          </Text>
          <Text style={stylesR.currentPrice}>
            Total Price: ${(Math.round(order.total_amount * 100) / 100).toFixed(2)}
          </Text>
          <Text style={stylesR.servingsCount}>
          Pickup Time: {dateTime[1].substring(0, dateTime[1].length-5 )}
          </Text>
        </View>
      </View>

    </Pressable>
  );
};

export default ReservationCard;

const styles = StyleSheet.create({
    text:{
        fontSize: 13,
        fontWeight: "bold", 
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        textAlign: "center",
    },

});