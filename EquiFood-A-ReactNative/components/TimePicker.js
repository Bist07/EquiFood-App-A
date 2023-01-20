import { Button, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker = () => {
  // Straight from https://www.npmjs.com/package/@react-native-community/datetimepicker#getting-started


  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
    }
    if (Platform.OS === "ios"){
        <Pressable
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
        onPress={() => showMode(false)}
      >
        <AntDesign name="closecircle" size={36} color="black" />
      </Pressable>
    }
    // for iOS, add a button that closes the picker
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          minuteInterval={15}
        />
      )}
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({});
