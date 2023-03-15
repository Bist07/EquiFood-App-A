import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import Profile from "../components/Profile";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Privacy(){

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

                <Text style={styles.title}> Terms & Conditions </Text>

                <Text style={{ textAlign: "center", marginTop: 90}}> Administration Terms and Conditions to be placed here. </Text>  

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
        marginTop: 40,
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

