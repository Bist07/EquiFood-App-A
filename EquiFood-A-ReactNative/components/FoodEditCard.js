import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";
import stylesR from './stylesR'
import FoodEditForm from "./FoodEditForm";
import { useNavigation } from "@react-navigation/native";

const FoodEditCard = ({ food }) => {
  const dispatch = useDispatch();
  // console.log(food)
  const [itemCount, setCount] = useState(0);
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();
  return (
    <Pressable
      style= {stylesR.itemDisplay}
      onPress={() => navigation.navigate('FoodEditForm', {
        name: food.name,
        originalPrice: food.originalPrice,
        discountPrice: food.discountPrice,
        servingsLeft: food.servingsLeft,
        imgUrl: food.imgUrl,
      })}>
      <View style={{ marginLeft: 10, flex: 1 }}>

        <Text style={stylesR.itemName}>
          {food.name}
        </Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={stylesR.originalPrice}>
            ${(Math.round(food.originalPrice * 100) / 100).toFixed(2)}
          </Text>
          <Text style={stylesR.currentPrice}>
            ${(Math.round(food.discountPrice * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <Text style={stylesR.servingsCount}>
          Servings Left: {food.servingsLeft}
        </Text>
      </View>
      <Pressable style={{ marginRight: 15 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 8 }}
          source={{ uri: food.imgUrl }}
        />
      </Pressable>

    </Pressable>
  );
};

export default FoodEditCard;

const styles = StyleSheet.create({});
