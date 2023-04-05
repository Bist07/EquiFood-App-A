import { StyleSheet, View, TextInput, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useState, useEffect } from 'react';
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import { getOrderedRestaurants, getRestaurants } from "../API/RestaurantAPI";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// This page displays all restaurant data in one page.

const RestaurantsView = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [storeData, setStoreData] = useState([]);
  const [orderedData, setOrderedData] = useState();

  // For filtering Modal Pop Up:
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await getRestaurants();
      const orderedResult = await getOrderedRestaurants();
      setStoreData(result);
      setOrderedData(orderedResult);
    }
    fetchData();
  }, []);

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
          borderBottomLeftRadius: 10,
          borderBottomEndRadius: 10,
        }}
      >
        <View style={{ backgroundColor: "#fff", paddingRight: 10, borderRadius: 12, }}>
          <TouchableOpacity onPress={() => {
            setModalVisible(true);
          }}>
            <MaterialCommunityIcons name="tune-variant" size={24} color="gray" style={{ padding: 10, backgroundColor: "#fff", borderWidth: 1, borderColor: "#e8e8e8", borderRadius: 12, }} />
          </TouchableOpacity>
        </View>
        <AntDesign name="search1" size={20} color="gray" style={{ paddingLeft: 7 }} />
        <TextInput
          style={{ paddingLeft: 10 }}
          value={input}
          placeholder="Restaurant name, cuisines, or a dish"
          onChangeText={(text) =>
            setInput(text)
          }
        />
      </View>
      <View style={{ width: '80%', backgroundColor: "#fff" }}>
        <View id="header">
        </View>
      </View>
      <View style={{ marginTop: 10, height: "90%" }}>
        <SearchFilter data={storeData} input={input} setInput={setInput} />
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade">

        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>

          <View style={{ backgroundColor: "#50C878", marginTop: 400, margin: 75, borderRadius: 25 }}>
            <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
              onPress={() => {
                setStoreData(orderedData);
                setModalVisible(false);
              }}>
              <Text style={{ fontSize: 22, padding: 12, textAlign: "center", color: "#FAF9F6" }}> Sort by Name </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}}
              onPress={() => {
                setStoreData(orderedData);
                setModalVisible(false);
              }}>
              <Text style={{ fontSize: 22, padding: 12, textAlign: "center", color: "#FAF9F6" }}> Sort by Rating </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RestaurantsView;
const styles = StyleSheet.create({});
