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

        <ScrollView style={{marginTop:45, backgroundColor:"#F0F0F0"}}>
        <View style={{width: '100%' }}>
           <View id="header">
             <Header />
           </View>        
            <View>
                <Text> View of Donations to be implementeds.</Text>
            </View>
        
        </View>
        </ScrollView>
    )
}

export default Donations;