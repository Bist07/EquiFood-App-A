import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RestaurantsView from './screens/RestaurantsView';
import StackNavigator from './StackNavigator';
import { Provider } from "react-redux";
import store from './store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

