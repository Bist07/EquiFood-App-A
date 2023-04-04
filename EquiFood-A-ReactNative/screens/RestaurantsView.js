import { StyleSheet, View, TextInput, Image, Pressable, ScrollView, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState, useEffect } from 'react';
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../API/RestaurantAPI";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import express from "express";
// import { pool } from '../server/helpers/database.js'
// export const router = express.Router()

// This page displays all restaurant data in one page.

// const navigation = useNavigation();

const RestaurantsView = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [masterData, setmasterData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  // For filtering Modal Pop Up:
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await getRestaurants();
      setStoreData(result);
      setmasterData(result);
    }
    fetchData();

  }, []);

  const SearchFilter = ({ data, input, setInput }) => {
    return (
      <View>
        <FlatList contentContainerStyle={{ flexGrow: 1 }} data={data} renderItem={({ item }) => {
          //If not searching (search bar empty):
          if (input === "") {
            return (
              <View>
                <RestaurantCard item={item} />
              </View>
            )
          }
          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View>
                <RestaurantCard item={item} />
              </View>
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

                  // console.log(storeData);
                // const sortedData = [storeData].sort((a,b) => a.item.name > (b.item.name) ? -1 : 1);
                // const sortedData = [storeData].filter(item => item.rating >= 4);
                // const restaurant = storeData.item
  // const sortByName = (data) => {
  //   const sortedData = [...data].sort((a,b) => a.item.name.localeCompare(b.item.name));
  //   return (

  //     <View>
  //       console.log("DOG");
  //     {/* <FlatList contentContainerStyle={{ flexGrow: 1 }} data={data} renderItem={({ item }) => {
  //       <View>
  //              <RestaurantCard item={item.name} />
  //       </View>
  //       }
  //     }
  //     /> */}
  //     </View>
      
  //   )

  // }

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
          borderRadius: 12,
          marginLeft: 20,
          marginRight: 70,
          marginTop: 20,
        }}
      >
       
        <AntDesign name="search1" size={20} color="gray" style={{padding:10}}/>
        <TextInput
          style={{ paddingLeft: 5 }}
          value={input}
          placeholder="Restaurant name, cuisines, or a dish"
          onChangeText={(text) => setInput(text)}
        />
        
        <View id="filter"
        style={{
          flexDirection: "row",
          alignItems: "right",
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#e8e8e8",
          padding: 8,
          borderRadius: 12,

          marginLeft: 25,
          // marginRight: 27,
          // marginTop: 20,
        }}>
        
        <TouchableOpacity onPress={() =>{
          setModalVisible(true);
        }}>
          <MaterialCommunityIcons name="tune-variant" size={24} color="gray" />
        </TouchableOpacity>
        </View>
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

          <View style = {{backgroundColor: "#50C878", marginTop: 310, margin:75, borderRadius:25 }}>
            <TouchableOpacity style = {{borderBottomWidth: 1,borderBottomColor: "gray"}}
            onPress={() =>{
              const sortedData = [storeData].sort((a,b) => a.item.name > (b.item.name) ? -1 : 1);
              // console.log(sortedData);
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
            <TouchableOpacity style = {{borderBottomWidth: 1, borderBottomColor: "gray"}}
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
