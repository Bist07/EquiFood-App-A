import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import stylesR from '../components/stylesR';
import { getOrderDetails } from '../API/OrdersAPI';

const ROOrderDetails = () => {
  const [menuItems, setMenuItems] = useState([]);
  const route = useRoute();

//   useEffect(() => {
//     async function fetchData() {
//       const result = await getOrderDetails(route.params.order_id);
//       setMenuItems(result);
//     }
//     fetchData();
//   }, []);

  console.log(menuItems);  
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
    <View style={{ marginLeft: 10, flex: 1 }}>
            <View style={{ flexDirection: "column" }}>
                <Text style={stylesR.currentPrice}>
                    COMING SOON IN FANCY CARDS
                </Text>
            </View>
      </View>
      </>


        
  )
}

export default ROOrderDetails

const styles = StyleSheet.create({})