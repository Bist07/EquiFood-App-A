import { Button, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";

const TimePicker = () => {
  // Straight from https://www.npmjs.com/package/@react-native-community/datetimepicker#getting-started

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [text, setText] = useState('Empty');
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
  
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
      setText('')
  
      const orderDate = new Date();
      console.log(orderDate);
      console.log(tempDate);

      if(orderDate > tempDate){
        alert("You have selected a time in the past. Please don't");
      }
      if(orderDate < tempDate){
        this.props.parentCallback(date);
      }

    }

  return (
        <View style={{ padding: 10, paddingTop: 0, backgroundColor: "white", flexDirection:"row", justifyContent:'space-between' }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Pickup Time: {text}
          </Text>

          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={false}
            display='default'
            onChange={onChange}
            minuteInterval={5}
          />

          
        </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({});
