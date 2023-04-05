import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RequestsCard from "../components/RequestsCard";
import { getRestaurantsRequest } from "../API/RestaurantAPI";

// View of Restaurant Requests
const RestaurantRequests = () => {
    const [storeData, setStoreData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchData() {
            const result = await getRestaurantsRequest();
            setStoreData(result);
        }
        fetchData()
        const intervalId = setInterval(fetchData, 15000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

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
                    <View style={{ marginLeft: 10, marginRight: 10, marginTop: 30 }}>
                        <ScrollView style={{ backgroundColor: "#FFF" }}>
                            <View style={{ marginLeft: 40, marginRight: 40, marginTop: 30 }}>
                                {storeData.map((item, index) => <RequestsCard key={index} item={item} />)}
                            </View>
                        </ScrollView>
                    </View>
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
