import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import stylesR from '../components/stylesR';
import { getOrderDetails, updateOrderStatus } from '../API/OrdersAPI';
import OrderCard from '../components/OrderCard';

// This is the page that shows pending/accepted order cards after clicking "View my Orders"

// Sidenote: Should probably add in Recently completed orders which show orders in the past week.
const ROOrderDetailView = () => {
  const [menuItems, setMenuItems] = useState([]);
  const route = useRoute();

  // Get menu item ids based on order item ids
  useEffect(() => {
    async function fetchData() {
      const result = await getOrderDetails(route.params.order_id);
      setMenuItems(result);
    }
    fetchData();
  }, []);

  const handleAcceptPress = () => {
    if(route.params.order_status == "pending"){
      updateOrderStatus(route.params.order_id, "accepted");
      navigation.navigate("RestaurantOwnerOrders");
    }
    if(route.params.order_status == "accepted"){
      updateOrderStatus(route.params.order_id, "completed");
      navigation.navigate("RestaurantOwnerOrders");
    }
  }

  const handleDeclinePress = () => {
    updateOrderStatus(route.params.order_id, "declined");
    navigation.navigate("RestaurantOwnerOrders");
  }

  console.log(route.params);  
  const navigation = useNavigation();
  return (
    <>
    <View style={{ paddingTop: 50 }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={stylesR.backArrow}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>
    </View>
    <View>
      <Text style={stylesR.centeredBoldText}>Customer Name: {route.params.first_name} {route.params.last_name}</Text>
    </View>
    <View style={{ marginLeft: 10, flex: 1 }}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ marginLeft: 40, marginRight: 40, marginTop: 0 }}>
          {menuItems.map((item, index) => <OrderCard key={index} item={item} />)}
        </View>
      </View>
    </View>
    <View style={{display:"flex", justifyContent:"space-evenly", marginBottom:25}}>
      <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptPress}>
        <Button
        title="Accept" style={stylesR.ROButtonText}
        onPress={handleAcceptPress}
        />
      </TouchableOpacity>   
      
      <View style={{display:'flex', flexDirection:2, justifyContent:"space-evenly"}}>
        <TouchableOpacity style={styles.declineButton}
          onPress={handleDeclinePress}
        > 
            <Button id="declineButton" title="Decline" onPress={handleDeclinePress} style={stylesR.ROButtonText}></Button>
        </TouchableOpacity> 
      </View>

    </View>
    </>


        
  )
}

export default ROOrderDetailView

const styles = StyleSheet.create({
  acceptButton:{
    backgroundColor: '#50C878',
    width: '40%',
    padding: 15,
    marginVertical: 5,
    margin:5,
    alignSelf: "center",
    alignItems: 'center',
    borderRadius: 5,
  },
  declineButton:{
    backgroundColor: '#F88379',
    width: '40%',
    padding: 15,
    marginVertical: 5,
    margin:5,
    alignSelf: "center",
    alignItems: 'center',
    borderRadius: 5
  },
})