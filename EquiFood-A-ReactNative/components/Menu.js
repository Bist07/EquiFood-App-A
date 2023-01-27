import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import stylesR from './stylesR'

const Menu = ({ menu, cart, setCart }) => {
  const [additems, setAddItems] = useState(0);
  return (
    <View
      style= {stylesR.itemDisplay}>
      <View style={{ margin: 10, flex: 1 }}>
        <Text style= {stylesR.itemName}>
          {menu.name}
        </Text>
        <View style={{ flexDirection: "column" }}>
          <Text style= {stylesR.originalPrice}>
            ${(Math.round(menu.originalPrice * 100) / 100).toFixed(2)}
          </Text>
          <Text style= {stylesR.currentPrice}>
            ${(Math.round(menu.discountPrice * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <Text style= {stylesR.servingsCount}>
          Servings Left: {menu.servingsLeft}
        </Text>
      </View>
      <View style={{ marginRight: 15 }}>
        <Image
          style= {stylesR.itemImage}
          source={{ uri: menu.imgUrl }}
        />
        <Pressable
          style= {stylesR.itemIncrement}>
          <Pressable
            onPress={() => {
                setCart(cart.filter((cartItem) => cartItem.id !== menu.id));
                setAddItems(Math.max(0,additems-1))
            }

            //   additems > 0 ? setAddItems(additems - 1) : setAddItems(0)
            }
          >
            <Text
              style= {stylesR.decreaseItem}>
              -
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style= {stylesR.itemCount}>
              {additems}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCart([...cart, menu])
              setAddItems(Math.min(menu.servingsLeft,additems+1))
            //   additems < menu.servingsLeft
            //     ? setCart([...cart,menu]) setAddItems(additems + 1)
            //     : setAddItems(additems)
            }}>
            <Text
              style= {stylesR.increaseItem}>
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
