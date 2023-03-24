import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TouchableHighlight, TextInput, ScrollView} from 'react-native'
import Logo from '../assets/logos/Equifood_Logo.png'
import CustomInput from '../components/CustomInput'
import { useNavigation, useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {MaterialIcons} from '@expo/vector-icons';
import { Ionicons, Feather } from "@expo/vector-icons";
import Header from '../components/header';
import RestaurantData from "../data/RestaurantData";
import AdminRestaurantView from '../components/AdminRestaurantView';

// View of current donations

// Process:
// We will calculate donations as the difference from the original amount subtracted by the discounted amount


const ViewCurrentRestaurants = ({onPress, text}) => {
    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState('');
    const route = useRoute();
    const navigation = useNavigation();
    const storeData = RestaurantData;
    // const restaurant = props.restaurant;
    
    return (
<ScrollView style={{backgroundColor:"#FFF"}}>
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
        

                

        </ScrollView>
    )
}

export default ViewCurrentRestaurants;

const styles = StyleSheet.create({



    container: {
        flow: 1,
        // backgroundColor:"white",
        padding: 10,
        width: "100%",
        alignItems: "center",
        

    },
    accept:{
        marginLeft:1,

    },
    cancel:{
        marginTop: -24,
        marginLeft:220,
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
