import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";

const Menu = ({ food }) => {
  const dispatch = useDispatch();
  // console.log(food)
  const [additems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);
  return (
    <View
      style={{
        marginBottom: 20,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ margin: 10, flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          {food.name}
        </Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 20, textDecorationLine: "line-through" }}>
            ${(Math.round(food.originalPrice * 100) / 100).toFixed(2)}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            ${(Math.round(food.discountPrice * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <Text style={{ fontSize: 18, marginTop: 10 }}>
          Servings Left: {food.servingsLeft}
        </Text>
      </View>
      <Pressable style={{ marginRight: 15 }}>
        <Image
          style={{ width: 120, height: 120, borderRadius: 8 }}
          source={{ uri: food.imgUrl }}
        />
          {selected ? (
            <Pressable
              style={{
                position: "absolute",
                top: 90,
                left: 15,

                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Pressable onPress={() => {
                if(additems === 1){
                  dispatch(removeFromCart(food))
                  setSelected(false)
                  setAddItems(0);
                }else{
                  setAddItems((c) => c - 1);
                  dispatch(decrementQuantity(food))

                }
              }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
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
                  {additems}
                </Text>
              </Pressable>

              <Pressable onPress={() => {
                setAddItems((c) => c + 1);
                dispatch(incrementQuantity(food))
              }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (additems == 0) {
                  setAddItems((c) => c + 1);
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
