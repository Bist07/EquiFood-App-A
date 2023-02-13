import react from 'react';
import { useNavigation } from "@react-navigation/native";
import { Pressable, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// for the 3 line icon:
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Logo from '../assets/logos/Equifood_Logo.png'

export default function Header(){

    const navigation = useNavigation();
    const openMenu = () => {
       // navigation.openDrawer()
    }
    return(
        <View style= {styles.header}>
            
            

            <Image style={ styles.logo}
            source = {Logo} />

            <Pressable
              onPress={() => navigation.navigate("ProfilePage")}
              style={{
                position: 'absolute',
                 right: 21
            }}
          >
            {/* <MaterialIcons name="user-o" size={35}  /> */}
            {/* <AntDesign name="menu" size={40} color="black" style={{marginTop:12}} /> */}

            <MaterialIcons name="menu" size={35} style={{marginTop:12}}  />
          </Pressable>
            
            {/* <View>
                <Text style = {styles.headerText}> Equifood </Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        //width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  
        flexDirection: 'row',
        justifyContent: 'center',  
        backgroundColor: 'white'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterspacing: 1
    },
    icon:{
        position: 'absolute',
        left: 16
    },
    logo:{

            // backgroundColor: "blue",
            position: 'absolute',
            right: 255,
            width: '50%', 
            height: 70,
            resizeMode : 'contain', 
            padding: 20,
            paddingBottom: 70,
            
          
  
    }
})