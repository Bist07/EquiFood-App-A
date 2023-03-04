import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FoodCard from "../components/FoodCard";
import { getMenu } from "../API/MenuAPI";

import CartScreen from "./CartScreen";
import { useSelector } from "react-redux";
import Header from "../components/header";

const RestaurantPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.discountPrice * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  cart.map((item) => console.log(item));
  // console.log(total);
  const route = useRoute();
  const navigation = useNavigation();

  const restaurant_id = route.params.id;

  const [storeMenu, setStoreMenu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getMenu(restaurant_id);
      setStoreMenu(result)
    }
    fetchData();
  }, []);

  return (
    <>
    <View style={{  backgroundColor:"#fff" }}>
      <ScrollView style={{ marginTop: 30, }}>
      <View style={{width: '100%' ,  backgroundColor:"#fff"  }}>
          <View id="header">
            {/* <Header /> */}
          </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",

            }}
          >
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "#50c864",
                width: 37,
                height: 37,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
                marginTop: 20,
                marginBottom: 15
              }}
            >
              <Ionicons name="chevron-back-outline" size={22} color="white" />
            </Pressable>

            {/* <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="bookmark" size={28} color="black" />
            <Feather
              style={{ marginLeft: 5 }}
              name="share"
              size={28}
              color="black"
            />
          </Pressable> */}
          </View>

          <View style={{ margin: 30, marginTop: 7 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginLeft: 0, marginTop: 10 }}>
                <Text style={{ marginLeft: 130, marginRight: 60, marginBottom: 5, fontSize: 24, fontWeight: "bold" }}>
                  {route.params.name}
                </Text>

                {/* <Text
              style={{
                fontSize: 13,
                color: "gray",
                fontWeight: "500",
                marginVertical: 1,
              }}
            >
              {route.params.cuisines}
            </Text> */}

                <Text style={{ marginLeft: 50, fontSize: 16, color: "gray", fontWeight: "500" }}>
                  {route.params.address}
                </Text>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "white",
                      padding: 5,
                      width: 160,
                      borderRadius: 13,
                      shadowOpacity: 0.12,
                      shadowRadius: 4.65,
                      marginTop: 20,
                      marginLeft: 110
                    }}
                  >
                    <Text style={{ color: "black", fontWeight: "bold", marginRight: 8 }}>4.5</Text>
                    <AntDesign name="star" size={22} color="gold" />
                    <Text style={{ color: "black", fontWeight: "bold", marginRight: 8 }}>  (25+)</Text>
                  </View>
                </View>
              </View>


            </View>
            <View style={{ marginTop: 20, borderColor: "gray", borderWidth: 0.4, borderRadius: 25, padding: 20 }}>
              <View style={{ marginTop: 0, margin: 10, alignItems: "center", justifyContent: "center", }}>
                <Text style={{ marginTop: 0, fontSize: 20 }}>Available Items</Text>
                <Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 2,
                    height: 2,
                    width: 59,
                    marginTop: 3
                  }}
                />
              </View>

              <View style={{}}>
                <View>
                  {storeMenu.map((item, i) => (
                    <FoodCard food={item} key={i} />
                  ))}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#00A877",
            width: "90%",
            padding: 13,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 30,
            position: "absolute",
            left: 20,
            bottom: 10,
          }}
        >
          <View>
            <View>
              <Text>{cart.length} items | ${total}</Text>
            </View>
          </View>
        </Pressable>
      )} */}
      
      <CartScreen restaurantName={route.params.name} />
      
    </>
  );
};

export default RestaurantPage;

const styles = StyleSheet.create({});
