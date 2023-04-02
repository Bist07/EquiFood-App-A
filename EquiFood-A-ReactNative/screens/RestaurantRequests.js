import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TouchableHighlight, TextInput, ScrollView } from 'react-native'
import Logo from '../assets/logos/Equifood_Logo.png'
import CustomInput from '../components/CustomInput'
import { useNavigation, useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, Feather } from "@expo/vector-icons";
import Header from '../components/header';
import RestaurantData from "../data/RestaurantData";
import AdminRestaurantView from '../components/AdminRestaurantView';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


// View of Restaurant Requests


const RestaurantRequests = ({ onPress, text }) => {
    const [storeData, setStoreData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await getRestaurantsRequest();
            setStoreData(result);
        }
        fetchData();
    }, []);

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <View style={{ alignSelf: "flex-start", marginTop: 70 }}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{
                        backgroundColor: '#50C878',
                        width: 35,
                        height: 35,
                        borderRadius: 17,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 2,
                        marginTop: -10,
                        marginBottom: 10,
                    }}
                >
                    <Ionicons name="chevron-back-outline" size={20} color="white" />
                </Pressable>
            </View>

            <Text style={{ fontSize: 35, marginTop: 20 }}> Restaurant Requests </Text>
            <Text style={{ textAlign: "center", marginTop: 12, fontSize: 15, fontWeight: "205" }}> Select restaurant to view restaurant information</Text>


            <ScrollView style={styles.body}>


                <View style={{ marginTop: 40, width: "100%" }}>

                    <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 10, marginTop: 20 }}>
                    </View>


                    <View style={styles.card}>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: "bold", padding: 20, fontSize: 20 }}> Restaurant Name </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="check-square" size={22} color="#50C878" style={{ margin: 10, padding: 10, borderColor: '#ccc', borderWidth: 1 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="delete-forever-outline" size={28} color="#DC143C" style={{ margin: 10, padding: 7, borderColor: '#ccc', borderWidth: 1 }} />
                        </TouchableOpacity>
                    </View>


                    {/* <TouchableOpacity style={styles.AdminItem}
                                // onPress={() => navigation.navigate('RestaurantRequests')}
                                >
                                <View style={styles.innerContent}>
                                    <Text style={styles.textStyle}> Donair Dude </Text>
                                    <Feather name="check-square" size={23} color="#80461B" style={styles.accept} />
                                <MaterialCommunityIcons name="delete-forever-outline" size={28} color="#80461B" style={styles.cancel} />
                                </View>
                                
                </TouchableOpacity> */}


                </View>

            </ScrollView>
        </View>
    )
}

export default RestaurantRequests;

const styles = StyleSheet.create({


    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    body: {
        // alignItems: 'left',
        backgroundColor: "#FFF",
        width: "100%",
        // marginLeft: -110,
    },
    card: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
        // marginBottom:25, 
        // marginTop:30
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
