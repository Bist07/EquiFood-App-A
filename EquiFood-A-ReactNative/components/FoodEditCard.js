import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";
import stylesR from './stylesR'
import FoodEditForm from "./FoodEditForm";
import { useNavigation } from "@react-navigation/native";
import { Buffer } from 'buffer';

const FoodEditCard = ({ food }) => {
  const dispatch = useDispatch();
  const [itemCount, setCount] = useState(0);
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();

  var img = Buffer.from(food.Img.data).toString('base64')
  let imageUri = "data:image/png;base64," + img;

  return (
    <Pressable
      style={stylesR.itemDisplay}
      onPress={() => navigation.navigate('FoodEditForm', {
        name: food.item_name,
        originalPrice: food.original_price,
        discountPrice: food.price,
        servingsLeft: food.quantity,
        imgSrc: imageUri,
      })}>

      <View style={{ marginLeft: 10, flex: 1 }}>

        <Text style={stylesR.itemName}>
          {food.item_name}
        </Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={stylesR.originalPrice}>
            ${(Math.round(food.original_price * 100) / 100).toFixed(2)}
          </Text>
          <Text style={stylesR.currentPrice}>
            ${(Math.round(food.price * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <Text style={stylesR.servingsCount}>
          Servings Left: {food.quantity}
        </Text>
      </View>
      <Pressable style={{ marginRight: 15 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 8 }}
          source={{ uri: imageUri }}
        />
      </Pressable>

    </Pressable>
  );
};

export default FoodEditCard;

const styles = StyleSheet.create({});
