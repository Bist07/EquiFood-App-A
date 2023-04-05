import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const OrderPage = (props) => {
  const route = useRoute();
  const time = moment().format("LT");
  const navigation = useNavigation();
  const date = props.date;
  // let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
  // const formattedTime = date.getHours() + ':' + date.getMinutes();
  // console.log(route.params);
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#17B169", padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          {route.params.restaurantName} has accepted your order at {time}
        </Text>
      </View>
      <Pressable onPress={() => navigation.navigate("RestaurantsView")} style={styles.backButton}>
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 150,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Your reservation is set to {route.params.orderTime}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop:50 }}>
          Please show your reservation to the restaurant staff upon arrival.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#006A4E",
    width: 40,
    height: 40,
    marginTop: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
