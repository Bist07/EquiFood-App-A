import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";
import stylesR from './stylesR'

const Menu = ({ food }) => {
  const dispatch = useDispatch();
  // console.log(food)
  const [itemCount, setCount] = useState(0);
  const [selected, setSelected] = useState(false);
  return (
    <View
      style= {stylesR.itemDisplay}>
      <View style={{ margin: 10, flex: 1 }}>

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
          style={{ width: 120, height: 120, borderRadius: 8 }}
          source={{ uri: food.imgUrl }}
        />
          {selected ? (
            <Pressable style={stylesR.itemImage}>
              <Pressable onPress={() => {
                if(itemCount === 1){
                  dispatch(removeFromCart(food))
                  setSelected(false)
                  setCount(0);
                }else{
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
                    fontSize: 20,
                    color: "green",
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
                if (additems == 0) {
                  setCount((c) => c + 1);
                }
                dispatch(addToCart(food));
              }}
              style={{
                position: "absolute",
                top: 90,
                left: 15,

                flexDirection: "row",
                paddingHorizontal: 25,
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#018749",
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

export default Menu;

const styles = StyleSheet.create({});
