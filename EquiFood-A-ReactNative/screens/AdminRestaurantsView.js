import { StyleSheet, Flatlist, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import ProfilePage from "./ProfilePage";
import { getRestaurants } from "../API/RestaurantAPI";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import stylesR from '../components/stylesR'
import { Ionicons, Feather } from "@expo/vector-icons";
import AdminRestaurantsCard from "../components/AdminRestaurantsCard";

// View of current donations

// Process:
// We will calculate donations as the difference from the original amount subtracted by the discounted amount


const AdminRestaurantsView = ({ onPress, text }) => {
    const [storeData, setStoreData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await getRestaurants();
            setStoreData(result);
        }
        fetchData();

    }, []);

    return (
        <View style={{ backgroundColor: 'white', }}>

            <Pressable
                onPress={() => navigation.goBack()}
                style={{
                    backgroundColor: "#50c864",
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 20,
                    marginTop: 90,
                    marginBottom: 15
                }}
            >
                <Ionicons name="chevron-back-outline" size={22} color="white" />
            </Pressable>

            <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, marginTop: 10, }}>View Current Restaurants</Text>
            </View>
            <ScrollView style={{ backgroundColor: "#FFF" }}>
                <View style={{ marginLeft: 40, marginRight: 40, marginTop: 30 }}>
                    {storeData.map((item, index) => <AdminRestaurantsCard key={index} item={item} />)}
                </View>
            </ScrollView>
        </View>

    )
}

export default AdminRestaurantsView;

const styles = StyleSheet.create({

    root: {
        // alignItems: 'center',
        // padding: 20,
        backgroundColor: 'white',
        // flex:1,
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
