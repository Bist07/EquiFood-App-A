import { StyleSheet, Flatlist, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import ProfilePage from "./ProfilePage";
import { getRestaurants } from "../API/RestaurantAPI";
import {useNavigation} from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import stylesR from '../components/stylesR'
// This page displays all restaurant data in one page.

// const navigation = useNavigation();

const RestaurantsView = () => {
  const [filteredData, setfilteredData] = useState([]);

  const [input,setInput] = useState([]);
  // console.log(input)

  const navigation = useNavigation();
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');

  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getRestaurants();
      setStoreData(result);
      setmasterData(result);
    }
    fetchData();
  
  }, []);

  const SearchFilter = ({data, input, setInput}) => {
    return(
      <View>
        {/* <Text>Search Filter</Text> */}
        
        <FlatList contentContainerStyle={{flexGrow: 1}} data = {data} renderItem = {({item}) => {
          if(input === ""){
            return(
              <View>
                <Text><RestaurantCard item={item}/> </Text>
              </View>
            )
          }
          if(item.name.toLowerCase().includes(input.toLowerCase())){ //.toLowerCase()
            return(
              <View>
                <Text><RestaurantCard item={item}/> </Text>
              </View>
            )
          }
        }}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
          </Text>
        )}
        ListFooterComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}></Text>
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
              padding: 11,
              borderRadius: 12,
              marginLeft: 27,
              marginRight: 27,
              marginTop:20,
            }}
          >
            <AntDesign name="search1" size={20} color="gray" />
            <TextInput
             style={{ paddingLeft: 5 }}
             value = {input}
             placeholder="Restaurant name, cuisines, or a dish"
             onChangeText={(text) => setInput(text)}
             />
      </View>
      <View>
      {/* <FlatList style={{ marginLeft: 40, marginRight: 40, marginTop: 30 }}
              data = {storeData}
              keyExtractor= {(item, index) => index.toString()}
              ItemSeparatorComponent= {ItemSeparatorView}
              renderItem= {ItemView}

            /> */}
      </View>
      <View style={{ width: '80%', backgroundColor: "#fff" }}>
          <View id="header">
            {/* <Header /> */}
          </View>
        </View>
        <View style={{ marginTop: 10,height:"90%" }}>

          <SearchFilter data = {storeData} input = {input} setInput = {setInput}/>
          {/* <View style={{ marginLeft: 40, marginRight: 40, marginTop: 30 }}>
            {storeData.map((item, index) => <RestaurantCard key={index} item={item} />)}
          </View> */}

        </View>   
    </View> 
  );
};

export default RestaurantsView;

const styles = StyleSheet.create({});
