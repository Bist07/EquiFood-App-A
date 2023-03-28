import { useNavigation } from '@react-navigation/native'
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import config from '../config';
import ImagePickerButton from '../components/ImagePicker'
import { uploadFile } from '../API/ImageAPI'

const RestaurantInsertView = () => {
  const navigation = useNavigation();
  const [hours, setHours] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState('');
  const [name, setName] = useState('');

  const onChangeHoursHandler = (hours) => {
    setHours(hours);
  };

  const onChangeAddressHandler = (address) => {
    setAddress(address);
  };

  const onChangeCuisineHandler = (cuisine) => {
    setCuisine(cuisine);
  };

  const onChangeNameHandler = (name) => {
    setName(name);
  };

  const onSubmitFormHandler = async (e) => {
    try {

      uploadFile(file, setImageURL)

      const data = {
        address: address,
        hours: hours,
        cuisine: cuisine,
        name: name,
        imageURL: imageURL
      };

      const response = await axios({
        url: `${config.local.url}:${config.local.port}/Restaurant/Insert`,
        method: 'post',
        data: data,
        headers: {
          'Content-Type': 'application/json'
        },
      });

      alert("Restaurant added");
    } catch (error) {
      console.log(error);
      alert("An error has occurred");
    }
  }

  return (
    <>
      <View style={{ paddingTop: 50 }} id="header">
        {/* <Header /> */}
      </View>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#006A4E",
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          marginTop: 30,
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>
      <ScrollView style={stylesR.RestaurantInsertView}>
        <View>
          <Text style={{ marginBottom: 5 }}>Restaurant Name</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Restaurant Name"} value={name} onChangeText={onChangeNameHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Address</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Address"} value={address} onChangeText={onChangeAddressHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Cuisine</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Cuisine"} value={cuisine} onChangeText={onChangeCuisineHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Hours</Text>
          <View style={stylesR.inputForm}>
            <TextInput placeholder={"Hours"} value={hours} onChangeText={onChangeHoursHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
          </View>
        </View>

        <View>
          <Text style={{ marginBottom: 5 }}>Image</Text>
          <View style={stylesR.inputForm}>
            {<ImagePickerButton callback={setFile} />}
          </View>
        </View>
        <View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
            <TouchableOpacity style={stylesR.ROFormButtons}>

              <Button
                title="Submit"
                onPress={onSubmitFormHandler}
                style={{ "backgroundColor": "gray", "margin": 2 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={stylesR.ROFormButtons}
              onPress={() => navigation.navigate('RestaurantInsertView')}>
              <Button title="Reset" style={stylesR.ROButtonText}></Button>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantInsertView;