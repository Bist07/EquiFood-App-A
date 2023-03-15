import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import Profile from "../components/Profile";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function RecentOrders(){

    const navigation = useNavigation();

    return(

        <ScrollView style={{ backgroundColor: "#fff" }}>

            <Pressable
                        onPress={() => navigation.goBack()}
                        style={{
                            backgroundColor: "#50c864",
                            width: 37,
                            height: 37,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: 10,
                            marginTop: 70,
                            marginBottom: 15
                        }}
                    >
                        <Ionicons name="chevron-back-outline" size={22} color="white" />
            </Pressable>

            <View style={styles.container}>

                <Text style={styles.title}> Recent Orders </Text>

                <Text style={{ textAlign: "center", marginTop: 150}}> Recent orders will be displayed here. </Text>

            </View>
  
        </ScrollView>
    )
}


const styles = StyleSheet.create({



    container: {
        flow: 1,
        // backgroundColor:"white",
        padding: 15,
        width: "100%",
        //alignItems: "center",

    },

    innerContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',

    },

    title: {
        marginTop: 20,
        // fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    }



});

