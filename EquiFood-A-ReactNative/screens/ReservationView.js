import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getUserOrders } from '../API/OrdersAPI';
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesR from '../components/stylesR';
import OrderSummaryCard from '../components/OrderSummaryCard';
import ReservationCard from '../components/ReservationCard';

const ReservationView = () => {

  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState("");

  //Retrieving User state Object and parsing out userName
  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(savedUser)
      setId(parsed.id);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    async function fetchData() {
      const result = await getUserOrders(parseInt(id));
      setOrders(result);
    }
    getUser();
    fetchData();
  }, []);
  

  if(orders.length != 0) {
    const pending = orders.filter(order => order.status_value == "pending");
    const accepted = orders.filter(order => order.status_value == "accepted");
    
    console.log("pending: "+ JSON.stringify(pending));
    console.log("accepted: "+ JSON.stringify(accepted));

    return (
      <ScrollView style={{ paddingTop: 20 }}>
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
          {accepted.map((item, index) => <ReservationCard key={index} item={item} />)}
        </View>

        <View style={{ marginTop: 15, margin: 10, marginBottom:0, alignItems: "center", justifyContent: "center", }}>
          <Text style={{ marginTop: 0, fontSize: 20 }}>Pending Orders</Text>
        </View>
        <View style={{ marginLeft: 40, marginRight: 40, marginTop: 0 }}>
          {pending.map((item, index) => <ReservationCard key={index} item={item} />)}
        </View>

        <View style={{marginBottom:100}}></View>

      </ScrollView>
    )
  } else {
    return (
      <ScrollView style={{ paddingTop: 50 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={stylesR.backArrow}
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </Pressable>
  
        <View style={{ marginTop: 0, margin: 10, marginBottom:0, alignItems: "center", justifyContent: "center", }}>
          <Text style={{ marginTop: 0, fontSize: 20 }}>You currently have no orders</Text>
        </View>

        <View style={{marginBottom:100}}></View>  
      </ScrollView>
    )
  }
}

export default ReservationView

const styles = StyleSheet.create({
  line: { 
    borderColor: "#F0F0F0", 
    height: 1, 
    borderWidth: 1 
  },
})