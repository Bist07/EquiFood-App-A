import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const items = [
    {
        id:"1",
        name:"Close To Me",
    },
    {
        id:"2",
        name:"Rating 4.0+"
    },
    {
        id:"3",
        name:"Offers",
    },
    {
        id:"4",
        name:"Cuisines",
    },
    {
        id:"5",
        name:"Large Inventory",
    }
]

const Categories = () => {
  return (
    <View style={{marginTop: 10}}>
      <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={items} renderItem={({item}) => (
        <Pressable style={{backgroundColor:"#32de84", margin:7, padding:5, borderRadius:4}}>
            <Text style={{color:"black"}}>{item.name}</Text>
        </Pressable>
      )}/>
      
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})