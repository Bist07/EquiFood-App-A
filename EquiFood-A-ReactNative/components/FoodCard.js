import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";
import stylesR from './stylesR'
import { Buffer } from 'buffer';

const FoodCard = ({ food }) => {
  const dispatch = useDispatch();
  const [itemCount, setCount] = useState(0);
  const [selected, setSelected] = useState(false);

  var img = Buffer.from(food.Img.data).toString('base64')
  let imageUri = "data:image/png;base64," + img;

  return (
    <View
      style={stylesR.itemDisplay}>
      <View style={{ margin: 10, flex: 1 }}>
        <Text style={stylesR.itemName}>
          {food.item_name}
        </Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={stylesR.originalPrice}>
            ${(Math.round(food.orignal_price * 100) / 100).toFixed(2)}
          </Text>
          <Text style={stylesR.currentPrice}>
            ${(Math.round(food.price * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <Text style={stylesR.servingsCount}>
          Servings Left: {food.quantity}
        </Text>
      </View>
      <Pressable style={{ marginRight: 17 }}>
        <Image
          style={{ width: 100, height: 70, borderRadius: 8 }}
          source={{ uri: imageUri }}
        />
        {selected ? (
          <Pressable style={stylesR.itemIncrement}>
            <Pressable onPress={() => {
              if (itemCount === 1) {
                dispatch(removeFromCart(food))
                setSelected(false)
                setCount(0);
              } else {
                setCount((c) => c - 1);
                dispatch(decrementQuantity(food))
              }
            }}>
              <Text style={stylesR.decreaseItem}>
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 18,
                  color: "#50c864",
                  paddingHorizontal: 6,
                }}
              >
                {itemCount}
              </Text>
            </Pressable>
            <Pressable onPress={() => {
              setCount((c) => c + 1);
              dispatch(incrementQuantity(food))
            }}>
              <Text style={stylesR.increaseItem}>
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setSelected(true);
              if (itemCount == 0) {
                setCount((c) => c + 1);
              }
              dispatch(addToCart(food));
            }}
            style={stylesR.addButton}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#50c864",
              }}
            >
              ADD
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
