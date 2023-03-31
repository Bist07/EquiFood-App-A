import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import RestaurantData from "../data/RestaurantData";


const Admin = ({ onPress, text }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const route = useRoute();
    const navigation = useNavigation();
    const storeData = RestaurantData;
    // const restaurant = props.restaurant;

    return (
        <View style={styles.root}>
            <View style={{  backgroundColor: "white", paddingTop: 30 }}>
 
                    <Text style={{fontSize:32, marginBottom:70, textAlign: "center"}}> Administrator Portal </Text>

                    <Text style={{fontSize:20, marginBottom:4, textAlign: "center"}}> Welcome Administrator </Text>

                    <Text style={{fontSize:12, marginBottom:100, textAlign: "center"}}> Please select from the below options for Equifood maintenance. </Text>



                            <TouchableOpacity style={styles.AdminItem}
                                onPress={() => navigation.navigate('Donations')}>
                                <Text style={styles.textStyle}> View Donations </Text>
                                {/* <Text> To be developed... </Text> */}
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.AdminItem}
                                onPress={() => navigation.navigate('RestaurantRequests')}>
                                <View style={styles.innerContent}>
                                    <Text style={styles.textStyle}> Restaurant Requests </Text>
                                </View>
                                {/* <Text> To be developed... </Text> */}
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.AdminItem}
                                onPress={() => navigation.navigate('ViewCurrentRestaurants')}>
                                <Text style={styles.textStyle}> View Current Restaurants </Text>
                                {/* <Text> To be developed... </Text> */}
                            </TouchableOpacity>
                        </View>

                        <View>


                        </View>

          
        </View>
    )
}

export default Admin;



const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
        // borderTopLeftRadius:50,
        // borderTopRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderBottomEndRadius: 50
    },

    adminBackground: {
        alignItems: 'center',
        padding: 40,
        flex: 1,
        backgroundColor: 'white',


    },

    AdminItem: {
        backgroundColor: "#50c864",
        // width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 40,
        marginLeft:15,
        marginRight: 15,
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderBottomEndRadius: 50,
        alignItems: "center",
        borderRadius: 12,
        shadowOpacity: 0.1,

    },
    textStyle: {
        fontSize: 21,
        color: "white",
        textAlign: "center",
        padding: 4,
        paddingLeft: 10,
        paddingRight: 10,
    },
    AdminButton: {
        marginTop: 20,
    },
    AdminText: {
        color: '#50C878',
        fontSize: 18,
    }

});