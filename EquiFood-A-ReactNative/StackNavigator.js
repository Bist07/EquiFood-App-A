import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantPage from './screens/RestaurantPage';
import OrderPage from './screens/OrderPage';
import Header from './components/header';
import ProfilePage from './screens/ProfilePage';
import RecentOrders from './screens/RecentOrders';
import AccountSettings from './screens/AccountSettings';
import Help from './screens/Help';
import Privacy from './screens/Privacy';
import About from './screens/About';
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import AdminLogIn from './screens/AdminLogIn';
import RestaurantOwnerLogIn from './screens/RestaurantOwnerLogIn';
import Admin from './screens/Admin';
import Donations from './screens/Donations';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn}  options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register}  options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{headerShown:false}}/>
        <Stack.Screen name="RestaurantOwnerLogIn" component={RestaurantOwnerLogIn}  options={{headerShown:false}}/>
        <Stack.Screen name="AdminLogIn" component={AdminLogIn}  options={{headerShown:false}}/>
        <Stack.Screen name="Admin" component={Admin}  options={{headerShown:false}}/>
        <Stack.Screen name="Donations" component={Donations}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="RestaurantPage" component={RestaurantPage} options={{headerShown:false}}/>
        <Stack.Screen name="OrderPage" component={OrderPage} options={{headerShown:false}}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown:false}}/>
        <Stack.Screen name="RecentOrders" component={RecentOrders} options={{headerShown:false}}/>
        <Stack.Screen name="AccountSettings" component={AccountSettings} options={{headerShown:false}}/>
        <Stack.Screen name="Help" component={Help} options={{headerShown:false}}/>
        <Stack.Screen name="Privacy" component={Privacy} options={{headerShown:false}}/>
        <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})