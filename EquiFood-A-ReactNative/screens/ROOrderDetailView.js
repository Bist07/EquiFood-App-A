import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import stylesR from '../components/stylesR';
import { completeOrder, getOrderDetails, updateOrderStatus } from '../API/OrdersAPI';
import OrderCard from '../components/OrderCard';
import { acceptOrder } from '../API/OrdersAPI';

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

  const handleDeclinePress = () => {
    updateOrderStatus(route.params.order_id, "declined");
    navigation.navigate("RestaurantOwnerOrders");
  }

  function AcceptButton(order_id, status_value) {
    const handleAcceptPress = () => {
        updateOrderStatus(order_id, "accepted");
        navigation.navigate("RestaurantOwnerOrders");
    };
  
    const handleCompletePress = () => {
        completeOrder(order_id, "completed");
        navigation.navigate("RestaurantOwnerOrders");
    };

    return (
      <>
        {status_value == "accepted" ? (
          <TouchableOpacity style={styles.acceptButton} onPress={handleCompletePress}>
            <Button title="Complete Order" onPress={handleCompletePress} style={stylesR.ROButtonText}/>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptPress}>
            <Button title="Accept  Order" onPress={handleAcceptPress} style={stylesR.ROButtonText}/>
          </TouchableOpacity>
        )}
      </>
    );
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
    <View style={{display:"flex", flexDirection:'row', justifyContent:"space-evenly", marginBottom:50}}>
      <View>
        {AcceptButton(route.params.order_id, route.params.order_status)}
      </View>

      <View style={{display:'flex', flexDirection:'row', justifyContent:"space-evenly"}}>
        <TouchableOpacity style={styles.declineButton} onPress={handleDeclinePress}> 
            <Button id="declineButton" title="Decline Order" onPress={handleDeclinePress} style={stylesR.ROButtonText}></Button>
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
    width: 150,
    padding: 12,
    marginVertical: 5,
    margin:5,
    alignSelf: "center",
    alignItems: 'center',
    borderRadius: 5,
  },
  declineButton:{
    backgroundColor: '#F88379',
    width: 150,
    padding: 12,
    marginVertical: 5,
    margin:5,
    alignSelf: "center",
    alignItems: 'center',
    borderRadius: 5
  },
})