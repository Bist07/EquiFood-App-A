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


const Donations = ({onPress, text}) => {
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
                            marginLeft: 10,
                            marginTop: 30,
                            marginBottom: 15
                        }}
                    >
                    <Ionicons name="chevron-back-outline" size={22} color="white" />
            </Pressable>
        <View style={{width: '100%' }}>


        <View style={styles.container}>
                <Text  style={styles.title}> March 2023 </Text>
                <Text  style={styles.title}> Donation Amounts </Text>
                <View style={styles.innerContainer}>
                    <Text style={{ textAlign: "center", marginTop: 50, fontSize:20, fontWeight: "220"}}> {" Freshie - $379.00\nJugo Juice - $240.00\nBurger Baron - $121.00\nSubway - $358.00\n" }</Text>
                </View>
                <View style={{ borderBottomColor: "#50c864", borderBottomWidth:10,}}>
                    <Text style={{  textAlign: "center", marginTop: 70, fontSize:27, fontWeight: "300"}}>March 2023 Total Donations: </Text>
                    <Text style={{ textAlign: "center", marginTop: 14, fontSize:30, fontWeight: "250"}}>$1,098.00</Text>
                </View>
        </View>
        
        </View>
        </ScrollView>
    )
}

export default Donations;

const styles = StyleSheet.create({



    container: {
        flow: 1,
        // backgroundColor:"white",
        padding: 10,
        width: "100%",
        alignItems: "center",
        

    },

    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "red",
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



});

