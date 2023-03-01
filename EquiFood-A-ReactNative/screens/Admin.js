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
import RestaurantRequests from './RestaurantRequests';
import ViewCurrentRestaurants from './ViewCurrentRestaurants';


const Admin = ({onPress, text}) => {
    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState('');
    const route = useRoute();
    const navigation = useNavigation();
    const storeData = RestaurantData;
    // const restaurant = props.restaurant;
    
    return (
        <View style={styles.root}>

        <ScrollView style={{marginTop:45, backgroundColor:"white"}}>
        <View style={{width: '100%', paddingTop:70 }}>
           <View id="header">
             {/* <Header /> */}
           </View>        
           <View style={styles.adminBackground}>

           <View style={styles.container}>

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

            {/* <View > 
                <Text style={{fontSize:20, fontWeight: "bold", marginTop:20, marginBottom:10}}>Current Restaurants</Text>
            </View> */}

            <View>
                
            {/* <Pressable onPress={() => navigation.navigate("RestaurantPage",{
                id:restaurant.id,
                name:restaurant.name,
                address:restaurant.address,
                cuisines:restaurant.cuisines,
            })}></Pressable>
             {storeData.map((store, index) => <AdminRestaurantView key={index} restaurant={store}/>)}
            
             */}
            
            </View>


           </View>

        
        </View>
        </ScrollView>
        </View>
    )
}

export default Admin;



const styles = StyleSheet.create({

    root:{
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex:1,
        // borderTopLeftRadius:50,
        // borderTopRightRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderBottomEndRadius: 50
    },

    adminBackground:{
        alignItems: 'center',
        padding: 40,
        flex:1,
        backgroundColor: 'white',
        

    },

    AdminItem:{
        backgroundColor: "#50c864",
        // width: '100%',
        paddingTop:15,
        paddingBottom:15,
        marginBottom:15,
        borderTopLeftRadius:50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomEndRadius: 50,
        alignItems: "center",
        borderRadius: 18,
        shadowOpacity: 0.1, 
        
    },
    textStyle:{
        fontSize:20,
        color: "white",
        textAlign: "center",
        padding:4,
        paddingLeft:10,
        paddingRight:10,
    },
    


    signInButton:{
        backgroundColor: '#50C878',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        marginTop:40,

        alignItems: 'center',
        borderRadius: 5
    },
    signInText:{
        fontWeight:'bold',
        color:'white'
    },
    passwordButton:{
        marginTop: 15,
    },
    passwordText:{
        color:'grey',
    },
    ROButton:{
        marginTop:90,
    },
    ROText:{
        color: '#50C878',
        fontSize: 18,
    },
    AdminButton:{
        marginTop:20,
    },
    AdminText:{
        color: '#50C878',
        fontSize: 18,
    }

});