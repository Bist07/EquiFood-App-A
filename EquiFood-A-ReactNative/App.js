import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { CartContext } from './Context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartContext>
      <StackNavigator/>
      <StatusBar style="auto"/>
    </CartContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
