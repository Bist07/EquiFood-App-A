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


const Admin = ({onPress, text}) => {
    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState('');
    const route = useRoute();
    const navigation = useNavigation();
    const storeData = RestaurantData;
    // const restaurant = props.restaurant;
    
    return (

        <ScrollView style={{marginTop:45, backgroundColor:"#F0F0F0"}}>
        <View style={{width: '100%' }}>
           <View id="header">
             <Header />
           </View>        
           <View style={styles.adminBackground}>

           <TouchableOpacity
                onPress={() => navigation.navigate('Donations')}>
                <Text style={{fontSize:20, fontWeight: "bold", marginTop:20, marginBottom:10}}> View Donations </Text>
                <Text> To be developed... </Text>
            </TouchableOpacity>

            <View>
            <Text style={{fontSize:20, fontWeight: "bold", marginTop:20, marginBottom:10}}> Restaurant Requests </Text>
            <Text> To be developed... </Text>
            </View>

            <View > 
                <Text style={{fontSize:20, fontWeight: "bold", marginTop:20, marginBottom:10}}>Current Restaurants</Text>
            </View>

            <View>
                
            <Pressable onPress={() => navigation.navigate("RestaurantPage",{
                id:restaurant.id,
                name:restaurant.name,
                address:restaurant.address,
                cuisines:restaurant.cuisines,
            })}></Pressable>
             {storeData.map((store, index) => <AdminRestaurantView key={index} restaurant={store}/>)}
            </View>


           </View>

        
        </View>
        </ScrollView>
    )
}

export default Admin;



const styles = StyleSheet.create({
    adminBackground:{
        alignItems: 'center',
        padding: 20,
        flex:1,
        

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