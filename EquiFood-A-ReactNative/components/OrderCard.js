import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";
import stylesR from './stylesR'
import FoodEditForm from "./FoodEditForm";
import { useNavigation } from "@react-navigation/native";
import { Buffer } from 'buffer';

const OrderCard = ( data ) => {
  const navigation = useNavigation();
  const order = data.item;
  const dateTime = order.reservation_datetime.split("T");
  const customer_id = 1;
  return (
    <Pressable
      style={stylesR.itemDisplay}
      onPress={() => navigation.navigate('ROOrderDetails', {
        customer_id: order.customer_id,
        order_id: order.id,
        totalCost: order.total_amount,
        discount: order.discount,
        order_status: order.order_status,
      })}
      >

      <View style={{ marginLeft: 10, flex: 1 }}>

        
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.text}>
            Customer ID: {order.customer_id}
          </Text>
          <Text style={stylesR.currentPrice}>
            ${(Math.round(order.total_amount * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <Text style={stylesR.servingsCount}>
          Reservation Time: {'\n' + dateTime[0] + ' ' + dateTime[1].substring(0, dateTime[1].length-5 )}
        </Text>
      </View>

    </Pressable>
  );
};

export default OrderCard;

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
