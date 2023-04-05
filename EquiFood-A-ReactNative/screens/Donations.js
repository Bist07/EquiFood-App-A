import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TouchableHighlight, TextInput, ScrollView } from 'react-native'
import Logo from '../assets/logos/Equifood_Logo.png'
import CustomInput from '../components/CustomInput'
import { useNavigation, useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, Feather } from "@expo/vector-icons";
import Header from '../components/header';
import AdminRestaurantView from '../components/AdminRestaurantView';
import axios from 'axios';
import config from '../config';


const Donations = ({ onPress, text }) => {
    const navigation = useNavigation();
    // const restaurant = props.restaurant;
    const [totalAmount, setTotalAmount] = React.useState('');
    const [data, setData] = useState([]);

    useEffect(() => {


        //function to all donations summed
        async function fetchData() {
            try {
                const response = await axios({
                    url: `${config.local.url}:${config.local.port}/Orders/totalDonations`,
                    method: 'get',

                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                //parsing out just the number  
                const jsonObject = response.data.totalAmount;
                const totalAmount = jsonObject[0]['SUM(fo.discount)'];

                setTotalAmount(totalAmount);

            } catch (error) {
                console.log(error);
            }
        }
        if (true) {
            fetchData();

        }

        //function to get per Restaurant donations
        async function fetchData2() {
            try {
                const response = await axios({
                    url: `${config.local.url}:${config.local.port}/Orders/donationsPerRestaurant`,
                    method: 'get',

                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                console.log(response.data.Object);

                const data = response.data.Object;

                setData(data);

            } catch (error) {
                console.log(error);
            }
        }
        if (true) {
            fetchData2();

        }
    }, [])




    return (

        <ScrollView style={{ backgroundColor: "#FFF" }}>
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
            <View style={styles.container}>
                <Text style={styles.title}> Donations </Text>
                <View style={styles.innerContainer}>
                    <View>

                        {data.map((item, index) => (
                            <View key={index} >
                                <Text style={{ marginTop: 10,left: 170, marginLeft:20, marginRight:20, textDecorationLine: 'underline', fontSize: 20 }}> {item.name}</Text>
                                <Text style={{ marginTop: 5, left: 210,marginLeft:20, marginRight:20,fontSize:15}}> Amount: ${item.discount} </Text>
                                <Text></Text>
                            </View>
                        ))}


                    </View>
                    <View style={{ marginLeft:20, marginRight:20, borderBottomColor: "#50c864", borderBottomWidth: 10, right: 80 }}>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>

                        <Text style={{ textAlign: "center", marginTop: 200, fontSize: 27, fontWeight: "bold", marginLeft:20, marginRight:20 }}>Total Donations: ${totalAmount} </Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
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
        fontSize: 40,
        textAlign: "center",
        marginBottom: 70
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



});

