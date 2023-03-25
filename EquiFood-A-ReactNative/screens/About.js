import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import Profile from "../components/Profile";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function About(){

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
                            marginTop: 90,
                            marginBottom: 15
                        }}
                    >
                        <Ionicons name="chevron-back-outline" size={22} color="white" />
            </Pressable>

            <View style={styles.container}>

                <Text style={styles.title}> Project Equifood </Text>

                <Text style={{ textAlign: "center", marginTop: 80}}> A student-led initiative promoting sustainable and healthy goods while facilitating donations to food-based initiatives. </Text>
 
                <Text style={{ textAlign: "center", marginTop: 30}}> Project EquiFood is an Enactus UBCO initiative. </Text>

                <Text style={{ textAlign: "center", marginTop: 30}}> Visit https://enactusubco.com/ to learn more. </Text>

                <Text style={{ textAlign: "center", marginTop: 30}}> Our mission is to partner with businesses in the food industry and charities tackling food insecurity to promote plant-based, sustainable, local, and nutritious goods and raise funds for food-based initiatives in the local community. Our goal is to address the UN sustainable development goal of zero hunger, promote sustainable production and consumption, and partnerships for the goals. </Text>
 
                    

                {/* <Text style={{ textAlign: "center", marginTop: 250}}> Please expect a response from Administration within 1-2 business days. </Text> */}

                

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
        alignItems: "center",

    },

    innerContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',

    },

    title: {
        marginTop: 30,
        // fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    }, 
    linkButton:{
        backgroundColor: '#50C878',
        width: '70%',
        padding: 15,
        marginVertical: 5,
        marginTop:70,    
        alignItems: 'center',
        borderRadius: 14
    },
    linkText:{
        fontWeight:'bold',
        color:'white',
        textAlign: "center"
    },



});

