import react from 'react';
import { useNavigation } from "@react-navigation/native";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// for the 3 line icon:
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export default function Header(){

    const navigation = useNavigation();
    const openMenu = () => {
       // navigation.openDrawer()
    }
    return(
        <View style= {styles.header}>
            <MaterialIcons name='menu' size={30} onPress={openMenu} style={styles.icon} />

            <Pressable
              onPress={() => navigation.navigate("ProfilePage")}
              style={{
                position: 'absolute',
                 right: 16
            }}
          >
            <AntDesign name="user" size={30} color="black" />
          </Pressable>
            
            <View>
                <Text style = {styles.headerText}> Equifood </Text>
            </View>
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
        //backgroundColor: 'red'
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
    }
})