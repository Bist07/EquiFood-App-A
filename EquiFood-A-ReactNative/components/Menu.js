import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

const Menu = ({ item, cart, setCart }) => {
  const [additems, setAddItems] = useState(0);
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
          {item.name}
        </Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 20, textDecorationLine: "line-through" }}>
            ${(Math.round(item.originalPrice * 100) / 100).toFixed(2)}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            ${(Math.round(item.discountPrice * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <Text style={{ fontSize: 18, marginTop: 10 }}>
          Servings Left: {item.servingsLeft}
        </Text>
      </View>
      <View style={{ marginRight: 15 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 8 }}
          source={{ uri: item.imgUrl }}
        />
        <Pressable
          style={{
            position: "absolute",
            left: 2,
            top: 90,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#17B169",
            borderRadius: 5,
          }}
        >
          <Pressable
            onPress={() => {
                setCart(cart.filter((cartItem) => cartItem.id !== item.id));
                setAddItems(Math.max(0,additems-1))
            }

            //   additems > 0 ? setAddItems(additems - 1) : setAddItems(0)
            }
          >
            <Text
              style={{ fontSize: 25, color: "white", paddingHorizontal: 10 }}
            >
              -
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{ fontSize: 20, color: "white", paddingHorizontal: 10 }}
            >
              {additems}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCart([...cart, item])
              setAddItems(Math.min(item.servingsLeft,additems+1))
            //   additems < item.servingsLeft
            //     ? setCart([...cart,item]) setAddItems(additems + 1)
            //     : setAddItems(additems)
            }}>
            <Text
              style={{ fontSize: 20, color: "white", paddingHorizontal: 10 }}
            >
              +
            </Text>
          </Pressable>
        </Pressable>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
