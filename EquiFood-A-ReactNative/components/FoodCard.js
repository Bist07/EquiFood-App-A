import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";
import stylesR from './stylesR'

const FoodCard = ({ food }) => {
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
      <Pressable style={{ marginRight: 17 }}>
        <Image
          style={{ width: 100, height: 70, borderRadius: 8 }}
          source={{ uri: food.imgUrl }}
        />
          {selected ? (
            <Pressable style={stylesR.itemIncrement}>
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
