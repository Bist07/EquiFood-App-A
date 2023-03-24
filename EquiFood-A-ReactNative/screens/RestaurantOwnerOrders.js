import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import { useNavigation } from '@react-navigation/native';
import { getOrders } from '../API/OrdersAPI';
import { Ionicons } from "@expo/vector-icons";
import OrderSummaryCard from '../components/OrderSummaryCard';
import stylesR from '../components/stylesR';

const RestaurantOwnerOrders = () => {

  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  //Set to rest_id to Burger Hub for now
  const restaurant_id = 1;

  useEffect(() => {
    async function fetchData() {
      const result = await getOrders(restaurant_id);
      setOrders(result)
    }
    fetchData();
  }, []);

  const pending = orders.filter(order => order.status_value == 0);
  const accepted = orders.filter(order => order.status_value == 1);
  
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
        <Text style={{ marginTop: 0, fontSize: 20 }}>Pending Orders</Text>
      </View>
      <View style={{ marginLeft: 40, marginRight: 40, marginTop: 0 }}>
        {pending.map((item, index) => <OrderSummaryCard key={index} item={item} />)}
      </View>

      <View style={{ marginTop: 0, margin: 10, marginBottom:0, alignItems: "center", justifyContent: "center", }}>
        <Text style={{ marginTop: 0, fontSize: 20 }}>Accepted Orders</Text>
      </View>
      <View style={{ marginLeft: 40, marginRight: 40, marginTop: 0 }}>
        {accepted.map((item, index) => <OrderSummaryCard key={index} item={item} />)}
      </View>

    </ScrollView>
  )
}

export default RestaurantOwnerOrders

const styles = StyleSheet.create({})