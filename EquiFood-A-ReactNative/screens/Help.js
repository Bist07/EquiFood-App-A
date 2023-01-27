import react from 'react';
import { useNavigation } from "@react-navigation/native";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// for the 3 line icon:
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export default function Help(){

    const navigation = useNavigation();

    return(
        <View>
            <View>
                <Text> For help Requests/ Contact </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})