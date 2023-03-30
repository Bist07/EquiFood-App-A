import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text, TouchableOpacity, TouchableHighlight, } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import Profile from "../components/Profile";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';


// View of profile page 
const ProfilePage =  (props) => {
    const [userName, setUsername] = useState('');
    const route = useRoute();
    const navigation = useNavigation();
    const ProfileData = ProfileData;

    //calling getuser function to set username
    useEffect(() => {
        getUser();
      }, [])

  //Retrieving User state Object and parsing out userName
   const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(savedUser)
      setUsername(parsed.firstName);
      console.log(userName);
    } catch (error) {
      console.log(error);
    }
  };
    return (
     
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={{ width: '100%' }}>
                <View id="header">
                    {/* <Header /> */}
                </View>
            </View>
            <View style={styles.container}>
    

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



                <ScrollView>
                    <View style={styles.profile}>
                        <AntDesign name="user" size={120} color="black" />
                        <Text style={styles.profileText}> {userName} </Text>
                    </View>
                    <View style={styles.firstBreak}>
                    </View>
                    <TouchableOpacity style={styles.profileItem}
                        onPress={() => navigation.navigate('RecentOrders')}>
                        <View style={styles.innerContent}>
                            <Text style={styles.textStyle}> VIEW RECENT ORDERS </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={styles.betweenBreak}>
                        <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 0 }} />
                    </View>
                    <TouchableOpacity style={styles.profileItem}
                        onPress={() => navigation.navigate('AccountSettings')}>
                        <View style={styles.innerContent}>
                            <Text style={styles.textStyle}> EDIT ACCOUNT </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={styles.betweenBreak}>
                        <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 0 }} />
                    </View>
                    <TouchableOpacity style={styles.profileItem}
                        onPress={() => navigation.navigate('Help')}>
                        <View style={styles.innerContent}>
                            <Text style={styles.textStyle}> HELP </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={styles.betweenBreak}>
                        <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 0 }} />
                    </View>
                    <TouchableOpacity style={styles.profileItem}
                        onPress={() => navigation.navigate('Privacy')}>
                        <View style={styles.innerContent}>
                            <Text style={styles.textStyle}> Terms & Conditions </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={styles.betweenBreak}>
                        <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 0 }} />
                    </View>
                    <TouchableOpacity style={styles.profileItem}
                        onPress={() => navigation.navigate('About')}>
                        <View style={styles.innerContent}>
                            <Text style={styles.textStyle}> ABOUT </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ScrollView>

    );
};
export default ProfilePage;

const styles = StyleSheet.create({
    profile: {
        paddingTop: 80,
        height: 250,
        alignItems: "center",
        borderColor: "gray",
        // borderWidth:3,
        // borderRadius:130,

    },
    profileText: {
        paddingTop: 12,
        paddingBottom: 70,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    firstBreak: {
        padding: 25,

    },
    container: {
        flow: 1,
        //backgroundColor:"white",
        padding: 15,
        width: "100%",
        //alignItems: "center",

    },
    profileItem: {
        backgroundColor: "#50c864",
        // width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 6,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomEndRadius: 50,
        alignItems: "center",
        borderRadius: 18,
        shadowOpacity: 0.1,

    },
    innerContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',

    },
    textStyle: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
    },
    betweenBreak: {
        marginLeft: 5,
        marginRight: 5,
        //backgroundColor: "white",
        padding: 3,
        marginBottom: 2,
    }

});

