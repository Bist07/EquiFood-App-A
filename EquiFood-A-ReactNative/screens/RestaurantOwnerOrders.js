import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import { useNavigation } from '@react-navigation/native';
import { getOrders } from '../API/OrdersAPI';
import { Ionicons } from "@expo/vector-icons";
import OrderSummaryCard from '../components/OrderSummaryCard';
import stylesR from '../components/stylesR';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RestaurantOwnerOrders = () => {

  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [restaurantId, setrestaurantId] = useState("");

  //Set to rest_id to Burger Hub for now
  


  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('RestaurantOwner');
      let parsed = JSON.parse(savedUser)
      setrestaurantId(parsed.restaurantId);
      console.log(restaurantId);
    } catch (error) {
      console.log(error);
    }
  };

   //calling getuser function to set username
   useEffect(() => {
    getUser();
  }, [])

  useEffect(() => {
    async function fetchData() {
      const result = await getOrders(restaurantId);
      setOrders(result)
    }
    fetchData();
      const interval = setInterval(fetchData, 5000);
      return () => clearInterval(interval);
  }, []);

  const pending = orders.filter(order => order.status_value == "pending");
  const accepted = orders.filter(order => order.status_value == "accepted");
  
  console.log("pending: "+ JSON.stringify(pending));
  console.log("accepted: "+ JSON.stringify(accepted));

  return (
    <ScrollView style={{ paddingTop: 50 }}>
      {/* <Header/> */}
      <Pressable
        onPress={() => navigation.goBack()}
        style={stylesR.backArrow}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>

      <View style={{ marginTop: 0, margin: 10, marginBottom:0, alignItems: "center", justifyContent: "center", }}>
        <Text style={{ marginTop: 0, fontSize: 20 }}>Accepted Orders</Text>
      </View>
      <View style={{ marginLeft: 40, marginRight: 40, marginTop: 0 }}>
        {accepted.map((item, index) => <OrderSummaryCard key={index} item={item} />)}
      </View>

      <View style={{ marginTop: 0, margin: 10, marginBottom:0, alignItems: "center", justifyContent: "center", }}>
        <Text style={{ marginTop: 0, fontSize: 20 }}>Pending Orders</Text>
      </View>
      <View style={{ marginLeft: 40, marginRight: 40, marginTop: 0 }}>
        {pending.map((item, index) => <OrderSummaryCard key={index} item={item} />)}
      </View>

      <View style={{marginBottom:100}}></View>

    </ScrollView>
  )
}

export default RestaurantOwnerOrders

const styles = StyleSheet.create({})