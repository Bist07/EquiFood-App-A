import { useNavigation } from '@react-navigation/native'
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesR from '../components/stylesR'
import { Ionicons } from "@expo/vector-icons";
import ImagePickerButton from '../components/ImagePicker'
import { InsertForm } from '../API/ImageAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';

const RestaurantInsertView = () => {
  const navigation = useNavigation();
  const [hours, setHours] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [file, setFile] = useState();
  const [name, setName] = useState('');
  const [ownerID, setOwnerID] = useState("");

  const getUser = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('RestaurantOwner'));
      const id = user.id
      setOwnerID(id);
    } catch (error) {
      console.log(error);
    }
  };

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
    getUser();
    const data = {
      address,
      hours,
      cuisine: cuisine,
      name,
      ImageURL: '',
      status: 'pending',
      ownerID
    };
    await InsertForm(name, file, 'restaurant', data)
  }

  return (
    <>
      <View style={styles.root}>
        <View style={{ alignSelf: "flex-start", marginTop: 30 }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "#50c864",
              width: 37,
              height: 37,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 0,
              marginTop: 0,
              marginBottom:0
            }}
          >
            <Ionicons name="chevron-back-outline" size={20} color="white" />
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 15, marginTop: 170 }}>
          <TextInput placeholder={"Restaurant Name"} value={name} onChangeText={onChangeNameHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="default" />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 15, marginTop: 25 }}>
          <TextInput placeholder={"Cuisine"} value={cuisine} onChangeText={onChangeCuisineHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 15, marginTop: 25 }}>
          <TextInput placeholder={"Hours"} value={hours} onChangeText={onChangeHoursHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 40, marginTop: 25 }}>
          <TextInput placeholder={"Address"} value={address} onChangeText={onChangeAddressHandler} style={{ flex: 1, paddingVertical: 0 }} keyboardType="numeric" />
        </View>


        <View>

          <View style={styles.inputForm}>
            {<ImagePickerButton callback={setFile} />}
          </View>
        </View>

        <View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
            <TouchableOpacity style={stylesR.ROFormButtons}
              onPress={() => onSubmitFormHandler()}>
              <Text style={styles.buttonText}> Submit </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesR.ROFormButtons}
              onPress={() => navigation.navigate('RestaurantInsertView')}>
              <Text style={styles.buttonText}> Reset </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </>
  )
}

export default RestaurantInsertView;


const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    height: "100%",
    flex: 1,
  },
  formButtons: {
    backgroundColor: '#50C878',
    width: '80%',
    padding: 7,
    marginVertical: 5,
    marginTop: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    marginLeft: 10,
    paddingLeft: 10,
    height: 40,
    fontWeight: 'bold',
    borderColor: '#50c864',
    borderWidth: 2
  },
  buttonText: {
    padding: 10,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
  },
  inputForm: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 2,
    padding: 8,
    marginBottom: 25,
    paddingBottom: 8,
    width: "100%",
  },

})