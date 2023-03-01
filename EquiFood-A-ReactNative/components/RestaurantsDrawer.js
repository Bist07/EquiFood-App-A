import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import LogIn from '../screens/LogIn';

const RestaurantsDrawer = (props) => {

    const route = useRoute();
    const navigation = useNavigation();
    return (

        // Calling in the items we defined in drawer navigator 
        <View style = {{flex:1}}>
        <DrawerContentScrollView {...props}>

        <View style = {{paddingTop: 10 }}>
            <DrawerItemList {...props} />
        </View>
        </DrawerContentScrollView>

        <View style = {{padding: 20, borderTopWidth:1, borderTopColor:"ccc"}}>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style = {{paddingVertical:15}}>

            <View style={{flexDirection: 'row', alignItems:"center"}}>
            <AntDesign name={"logout"} size={20}  />
            <Text style={{ marginLeft: 5}}> Log Out </Text>
            </View>
            </TouchableOpacity>
        </View>

        </View>
    )
}

export default RestaurantsDrawer