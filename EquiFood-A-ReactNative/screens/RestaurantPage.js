import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import menuData from "../data/menuData"
import Menu from "../components/Menu";

const RestaurantPage = () => {
  const data = menuData;
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#006A4E",
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </Pressable>

        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="bookmark" size={28} color="black" />
          <Feather
            style={{ marginLeft: 5 }}
            name="share"
            size={28}
            color="black"
          />
        </Pressable>
      </Pressable>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {route.params.name}
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500", marginVertical:1 }}>
            {route.params.cuisines}
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
            {route.params.address}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#17B169",
              padding: 5,
              width: 80,
              borderRadius: 6,
            }}
          >
            <Text style={{color:"white"}}>Rating</Text>
            <AntDesign name="star" size={24} color="gold" />
          </View>

        </View>
      </View>
      <View style={{margin:10}}>
          <Text style={{fontSize:17}}>Menu</Text>
          <Text style={{borderColor:"gray", borderWidth:2, height:2, width:45}}/>
      </View>
      <View>
        {data.map((item) => <Menu menu={item}/>)}
      </View>
      

    </SafeAreaView>
  );
};

export default RestaurantPage;

const styles = StyleSheet.create({});
