import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Restaurants = (props) => {
  const restaurant = props.restaurant;
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("RestaurantPage",{
      id:restaurant.id,
      name:restaurant.name,
      address:restaurant.address,
      cuisines:restaurant.cuisines,
    })}>
      <View style={{ margin: 5, marginBottom: 0, borderColor: "green",
            borderWidth:1,
            overflow:"hidden",borderTopLeftRadius: 7,
            borderTopRightRadius: 7, }}>
        <Image
          style={{
            width: "100%",
            aspectRatio: 1,
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
          source={{ uri: restaurant.logo }}
        />
      </View>

      <View
        style={{
          marginLeft: 5,
          marginRight: 5,
          padding: 8,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>
            {restaurant.name}
          </Text>
          <Text style={{ fontSize: 15, color: "gray", marginVertical: 7 }}>
            {restaurant.hours}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#17B169",
            padding: 5,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              paddingRight: 5,
              color: "white",
            }}
          >
            ???
          </Text>
          <AntDesign name="star" size={24} color="gold" />
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          right: 20,
          top: 20,
          backgroundColor: "white",
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Text># of Food Placeholder</Text>
      </View>

      <View
        style={{
          marginLeft: 5,
          marginRight: 5,
          backgroundColor: "white",
          padding: 5,
          marginBottom: 6,
        }}
      >
        <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 1 }} />
      </View>
    </Pressable>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});
