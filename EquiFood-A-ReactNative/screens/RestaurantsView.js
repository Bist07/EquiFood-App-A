import { StyleSheet, View, TextInput, Image, Pressable, ScrollView, Text, FlatList, TouchableOpacity, Modal} from "react-native";
import React, { useState, useEffect } from 'react';
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurantName, getRestaurants } from "../API/RestaurantAPI";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// This page displays all restaurant data in one page.


const RestaurantsView = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [storeData, setStoreData] = useState([]);

  // For filtering Modal Pop Up:
  const [modalVisible, setModalVisible] = useState(false);

  // For filtering through alphabetically:
  const [restaurant, setRestaurant] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await getRestaurants();
      setStoreData(result);
      const restaurantName = await AsyncStorage.getItem('restaurant');
      let parsed = JSON.parse(result)
      setRestaurant(parsed.name);
      // const restaurantName = await getRestaurantsName();
    }
    fetchData();
  }, []);

  //Retrieving restaurant State Object and parsing out Restaurant 
  const getRestaurant = async () => {
      try {
        const rest = await AsyncStorage.getItem('restaurant');
        let parsed = JSON.parse(rest)
        setRestaurant(parsed.name);
        console.log(restaurant);
      } catch (error) {
        console.log(error);
      }
    };

  const SearchFilter = ({ data, input, setInput }) => {
    return (
      <View>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={data}
          keyExtractor={(item) => item.id.toString()} // Add a key extractor function
          renderItem={({ item }) => {
            if (input === "") {
              return (
                <RestaurantCard item={item} /> // Render RestaurantCard component directly
              )
            }
            if (item.name.toLowerCase().includes(input.toLowerCase())) {
              return (
                <RestaurantCard item={item} /> // Render RestaurantCard component directly
              )
            }
          }}
          ListHeaderComponent={() => (
            <Text style={{ fontSize: 30, textAlign: "center", marginTop: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
            </Text>
          )}
          ListFooterComponent={() => (
            <Text style={{ fontSize: 30, textAlign: "center", marginBottom: 20, fontWeight: 'bold' }}></Text>
          )}
        />
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View id="searchbar"
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FAF9F6",
          borderWidth: 0.2,
          borderColor: "#e8e8e8",
          padding: 0,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderBottomLeftRadius:10,
          borderBottomEndRadius:10,
        }}
      >
        <View style={{ backgroundColor: "#fff", paddingRight:10, borderRadius: 12,}}>
        <TouchableOpacity onPress={() =>{
          setModalVisible(true);
        }}>
        <MaterialCommunityIcons name="tune-variant" size={24} color="gray" style={{ padding:10, backgroundColor: "#fff", borderWidth: 1, borderColor: "#e8e8e8", borderRadius: 12, }} />
        </TouchableOpacity>
        </View>
        <AntDesign name="search1" size={20} color="gray" style={{ paddingLeft: 7}} />
        <TextInput
          style={{ paddingLeft: 10 }}
          value={input}
          placeholder="Restaurant name, cuisines, or a dish"
          onChangeText={(text) => 
            setInput(text)
          }
        />
        {/* <View id="filter"
        style={{
          flexDirection: "row",
          justifyContent: 'flex-end',
          // alignItems: "right",
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#e8e8e8",
          padding: 8,
          borderRadius: 12,
          // alignContent: "flex-end",
          marginLeft: 30,
          position: "fixed",
          // marginRight: 27,
          // marginTop: 20,
        }}>

        </View> */}
    
        </View>
      <View style={{ width: '80%', backgroundColor: "#fff" }}>
        <View id="header">
          {/* <Header /> */}
        </View>
      </View>
      <View style={{ marginTop: 10, height: "90%" }}>
        <SearchFilter data={storeData} input={input} setInput={setInput} />
      </View>

      <Modal
      transparent = {true}
      visible = {modalVisible}
      animationType="fade">

      <View style = {{backgroundColor: "#000000aa", flex:1}}>

          <View style = {{backgroundColor: "#50C878", marginTop: 400, margin:75, borderRadius:25 }}>
            <TouchableOpacity style = {{borderBottomWidth: 1,borderBottomColor: "gray"}}
            onPress={() =>{

              // Sort Function to Sort Alphabetically:
              // If I could parse out the name from the data then I believe it should work properly other than that.
              
              const sortedData = [restaurant].sort((a,b) => a.item.name > (b.item.name) ? -1 : 1);
              console.log(sortedData);
                <FlatList contentContainerStyle={{ flexGrow: 1 }} data={sortedData} renderItem={({ item }) => {
                      <View>
                        <RestaurantCard item={item} />
                      </View>
                  } } />
              // <sortByName data={storeData} />
              setModalVisible(false);
            }}>
            <Text style = {{ fontSize:22 ,padding:12, textAlign:"center", color: "#FAF9F6"}}> Sort by Name </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{}}
            onPress={() =>{
              const sortedData = [storeData].sort((a,b) => a.item.name > (b.item.name) ? -1 : 1);
                <FlatList contentContainerStyle={{ flexGrow: 1 }} data={sortedData} renderItem={({ item }) => {
                      <View>
                        <RestaurantCard item={item} />
                      </View>
                  } } />
              setModalVisible(false);
            }}>
            <Text style = {{ fontSize:22 ,padding:12, textAlign:"center", color: "#FAF9F6"}}> Sort by Rating </Text>
            </TouchableOpacity>
          </View>

      </View>
        
      </Modal>
    </View>
  );
};

export default RestaurantsView;

const styles = StyleSheet.create({});
