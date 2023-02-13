import { StyleSheet, View, SafeAreaView, TextInput, Image, Pressable, ScrollView, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import RestaurantData from "../data/RestaurantData";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/header";
import Profile from "../components/Profile";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const ProfilePage = (props) => {

  const route = useRoute();
  const navigation = useNavigation();
  const ProfileData = ProfileData;
  return (
    <View style={{ backgroundColor:"#fff"}}>
    <ScrollView style={{marginTop:45, backgroundColor:"#fff"}}>
     <View style={{width: '100%' }}>
        <View id="header">
          <Header />
        </View>
    </View>
    <View style={styles.container}>
        <ScrollView>
                <View style={styles.profile}>
                    <AntDesign name="user" size={120} color="black" />
                    <Text style={styles.profileText}> Jane Doe </Text>
                </View>
            <View style= {styles.firstBreak}>
            </View>
            <TouchableOpacity style={styles.profileItem}
             onPress={() => navigation.navigate('RecentOrders')}>
                <View style={styles.innerContent}>
                    <Text style={styles.textStyle}> VIEW RECENT ORDERS </Text>
                </View>
            </TouchableOpacity>
            <View
                style= {styles.betweenBreak}>
                <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 0 }} />
            </View>
            <TouchableOpacity style={styles.profileItem}
                onPress={() => navigation.navigate('AccountSettings')}>
                <View style={styles.innerContent}>
                    <Text style={styles.textStyle}> EDIT ACCOUNT </Text>
                </View>
            </TouchableOpacity>
            <View
                style= {styles.betweenBreak}>
                <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 0 }} />
            </View>
            <TouchableOpacity style={styles.profileItem}
                onPress={() => navigation.navigate('Help')}>
                <View style={styles.innerContent}>
                    <Text style={styles.textStyle}> HELP </Text>
                </View>
            </TouchableOpacity>
            <View
                style= {styles.betweenBreak}>
                <Text style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 0 }} />
            </View>
            <TouchableOpacity style={styles.profileItem}
                onPress={() => navigation.navigate('Privacy')}>
                <View style={styles.innerContent}>
                    <Text style={styles.textStyle}> Terms & Conditions </Text>
                </View>
            </TouchableOpacity>
            <View
                style= {styles.betweenBreak}>
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
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
    profile:{
        paddingTop:80,
        height: 250,
        alignItems: "center",

    },
    profileText:{
        paddingTop: 12,
        paddingBottom: 70,
        fontSize:20,
        textAlign: "center",
        fontWeight: "bold",
    },
    firstBreak:{
        padding: 25,
    },
    container:{
        flow: 1,
        //backgroundColor:"white",
        padding:15,
        width: "100%",
        //alignItems: "center",
    },
    profileItem:{
        backgroundColor: "#50C878",
        width: '100%',
        padding:15,
        borderTopLeftRadius:50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomEndRadius: 50,
        alignItems: "center",
    },
    innerContent:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',
    },
    textStyle:{
        fontSize:15,
        color: "white",
        textAlign: "center",
    },
    betweenBreak:{
        marginLeft: 5,
        marginRight: 5,
        //backgroundColor: "white",
        padding: 3,
        marginBottom: 2,
    }
    
});

