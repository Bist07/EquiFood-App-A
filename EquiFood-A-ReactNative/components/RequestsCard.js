import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesR from './stylesR'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UpdateRequest } from '../API/RestaurantAPI'

const RequestsCard = (data) => {
  const navigation = useNavigation();
  const restaurant = data.item

  return (
    
    <View>
      {/* <View style={stylesR.borders}> */}
        {/* <Image style={stylesR.imageStyle} source={{ uri: restaurant.ImageURL }} /> */}
        {/* <TouchableOpacity>
          <Pressable
            onPress={() => {
              UpdateRequest(restaurant.id, 'accepted');
              alert("restaurant request accepted");
            }}
          >
            <Feather name="check-square" size={22} color="#50C878" style={{ margin: 10, padding: 10, borderColor: '#ccc', borderWidth: 1 }} />
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable
            onPress={() => {
              UpdateRequest(restaurant.id, 'declined');
              alert("restaurant request declined");
            }}
          >
            <MaterialCommunityIcons name="delete-forever-outline" size={28} color="#DC143C" style={{ margin: 10, padding: 7, borderColor: '#ccc', borderWidth: 1 }} />
          </Pressable>
        </TouchableOpacity>
      </View> */}
      {/* <View style={stylesR.descriptionCard}>
        <View>
          <Text style={stylesR.restaurantName}>
            {restaurant.name}
          </Text>
          <Text style={stylesR.restaurantHours}>
            {restaurant.hours}
          </Text>
        </View>
      </View> */}

      <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 5, marginTop: 10 }}>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity>
                        
                      </TouchableOpacity>
                        <TouchableOpacity>
                            {/* <Image style={{ fontWeight: "bold", padding: 20, fontSize: 20 }} source={{ uri: restaurant.ImageURL }} /> */}
                            <Text style={{ fontWeight: "bold", padding: 10, fontSize: 20 }}> {restaurant.name} </Text>
                            <Text style={{ padding: 5, marginLeft:5,fontSize: 20 }}> {restaurant.hours} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Pressable
                            onPress={() => {
                              UpdateRequest(restaurant.id, 'accepted');
                              alert("restaurant request accepted");
                            }}
                          >
                            <Feather name="check-square" size={22} color="#50C878" style={{ marginLeft: 80, margin: 10, padding: 10, marginTop:20, borderColor: '#ccc', borderWidth: 1 }} />
                          </Pressable>
                        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <Feather name="check-square" size={22} color="#50C878" style={{ margin: 10, padding: 10, borderColor: '#ccc', borderWidth: 1 }} />
                        </TouchableOpacity> */}
                        <TouchableOpacity>
          <Pressable
            onPress={() => {
              UpdateRequest(restaurant.id, 'declined');
              alert("restaurant request declined");
            }}
          >
            <MaterialCommunityIcons name="delete-forever-outline" size={28} color="#DC143C" style={{ margin: 10, padding: 7, marginTop:20, borderColor: '#ccc', borderWidth: 1 }} />
          </Pressable>
        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <MaterialCommunityIcons name="delete-forever-outline" size={28} color="#DC143C" style={{ margin: 10, padding: 7, borderColor: '#ccc', borderWidth: 1 }} />
                        </TouchableOpacity> */}
                    </View>
    </View >
  );
};

export default RequestsCard;

const styles = StyleSheet.create({
  

  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
},
body: {
    // alignItems: 'left',
    backgroundColor: "#FFF",
    width: "100%",
    // marginLeft: -110,
},
card: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    // marginBottom:25, 
    // marginTop:30
},

container: {
    flow: 1,
    // backgroundColor:"white",
    padding: 10,
    width: "100%",
    alignItems: "center",


},
accept: {
    marginLeft: 1,

},
cancel: {
    marginTop: -24,
    marginLeft: 220,
},

innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderBottomColor: "red",
    //alignItems: 'center',

},

title: {
    marginTop: 1,
    // fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
},
linkButton: {
    backgroundColor: '#50C878',
    width: '70%',
    padding: 15,
    marginVertical: 5,
    marginTop: 70,
    alignItems: 'center',
    borderRadius: 14
},
linkText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: "center"
},

AdminItem: {
    backgroundColor: "#50c864",
    // width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 4,
    shadowOpacity: 0.1,

},
textStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    // padding: 4,
    paddingLeft: 15,
    paddingRight: 15,
},
});
