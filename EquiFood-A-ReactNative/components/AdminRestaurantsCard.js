import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from './stylesR'
import { Ionicons, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const AdminRestaurantsCard = (data) => {
  const navigation = useNavigation();
  const restaurant = data.item

  return (
    <Pressable onPress={() => navigation.navigate("RestaurantPage", {
      id: restaurant.id,
      name: restaurant.name,
      uri: restaurant.ImageURL,
      address: restaurant.address,
      cuisines: restaurant.cuisine,
      hours: restaurant.hours,
      rating: restaurant.rating,
    })}>

    
      <View style={styles.card}>


        <View style={styles.descriptionCard}>
          <View>
          <View style={styles.restaurantNameBorder}>
            <Text style={styles.restaurantName}>
              {restaurant.name}
            </Text>
          </View>
            {/* <Text style={stylesR.restaurantHours}>
                {restaurant.hours}
              </Text> */}
            {/* <TouchableOpacity>
              <Text style={{ fontWeight: "bold", marginTop: 10, padding: 7, fontSize: 10, borderColor: '#50c864', borderWidth: 1, marginLeft: "60%", textAlign: "center" }}> Submit Review </Text>
            </TouchableOpacity> */}
            <TouchableOpacity>
              <Text style={{ flexDirection:'row', fontWeight: "bold", marginTop: 10, padding: 7, fontSize: 10, borderColor: 'red', borderWidth: 1, marginLeft: "35%", marginRight: "35%", marginTop:"10%" ,textAlign: "center" }}> Delete? </Text>
            </TouchableOpacity>
          </View>



        </View>


      </View>

    </Pressable>
  );
};

export default AdminRestaurantsCard;

const styles = StyleSheet.create({

  //     card:{
  //     flexDirection:'row', 
  //     borderBottomColor:'#ccc', 
  //     borderBottomWidth:1, 
  //     paddingBottom:10, 
  //     paddingTop:10,
  //     // marginBottom:25, 
  //     // marginTop:30
  // },
  card: {
    width: "90%",
    flexDirection:'row', 
    marginLeft: "5%",
    marginRight: "5%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    // margin:7,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 20,

  },
  descriptionCard: {
    // marginLeft: 0,
    // marginRight: -3,
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    // alignItems: "center",
    // borderTopLeftRadius: 0,
    // borderTopEndRadius: 0,
    borderRadius: 15,
    // justifyContent: "space-between",
    // textAlign: "center",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  restaurantNameBorder: {
    borderRadius: 10,
    borderColor: "#50c864",
    borderWidth: 5,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    

  },
  restaurantName: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
    shadowOpacity: 0,
    shadowRadius: 0,
    // left: 37,
    marginBottom: 2,
    marginLeft: "15%",
    marginRight: "15%",
    padding:10
  },
});