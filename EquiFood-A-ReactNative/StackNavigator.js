// import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import RestaurantsView from './screens/RestaurantsView';
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

import RegisterAdmin from './screens/RegisterAdmin';
import RestaurantOwnerLogIn from './screens/RestaurantOwnerLogIn';
import Admin from './screens/Admin';
import Donations from './screens/Donations';
import RestaurantOwnerView from './screens/RestaurantOwnerView';
import RestaurantInsertView from './screens/RestaurantInsertView';
import FoodEditView from './screens/FoodEditView';
import FoodInsertView from './screens/FoodInsertView';
import FoodEditForm from './components/FoodEditForm';
import { AntDesign } from '@expo/vector-icons';
import RestaurantsDrawer from './components/RestaurantsDrawer';
import RODrawer from './components/RODrawer';
import RestaurantRequests from './screens/RestaurantRequests';
import AdminDrawer from './components/AdminDrawer';
import AdminRestaurantsView from './screens/AdminRestaurantsView';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RestaurantOwnerOrders from './screens/RestaurantOwnerOrders';
import ROOrderDetailView from './screens/ROOrderDetailView';
import RegisterRO from './screens/RegisterRO';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


// Drawer Navigation for the Individual Customer Portal:

function IndividualView() {
  return (
    <Drawer.Navigator drawerContent={props => <RestaurantsDrawer{...props} />}
      useLegacyImplementation

      screenOptions={{

        headerTintColor: "#50c864",

        headerStyle: {
          height: 100,
          backgroundColor: "white"
        },
        //  overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: "#50c864",
          width: 240,
        },
        drawerActiveTintColor: {
          color: "#fff",
        },
        drawerItemStyle: {
          color: "#50c864",
        },
        drawerLabelStyle: {
          marginLeft: -20,
        },
        drawerActiveBackgroundColor: {
          color: "#006400",
        },

        // drawerLabelStyle: {
        // color: "red",
        // fontSize: 25,
        // },
      }}


      initialRouteName="RestaurantsView">

      <Drawer.Screen name="View Restaurants" component={RestaurantsView}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name={"profile"} size={20} color={color} />
          ),
        }} />


      <Drawer.Screen name="Visit Profile" component={ProfilePage} options={{
        drawerIcon: ({ color }) => (
          <AntDesign name={"user"} size={20} color={color} />
        ),
      }} />

      {/* Why is order page giving me errors? */}

      <Drawer.Screen name="View Reservation" component={OrderPage} options={{
        drawerIcon: ({ color }) => (
          <AntDesign name={"shoppingcart"} size={20} color={color} />
        ),
      }} />

    </Drawer.Navigator>
  );
}


// Drawer Navigation for the Restaurant Owner Portal:

function ROView() {
  return (
    <Drawer.Navigator drawerContent={props => <RODrawer{...props} />}
      useLegacyImplementation

      screenOptions={{

        headerTintColor: "#50c864",

        headerStyle: {
          height: 100,
          backgroundColor: "white"
        },
        //  overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: "#50c864",
          width: 255,
        },
        drawerActiveTintColor: {
          color: "#fff",
        },
        drawerItemStyle: {
          color: "#50c864",
        },
        drawerLabelStyle: {
          marginLeft: -20,
        },
        drawerActiveBackgroundColor: {
          color: "#006400",
        },

        // drawerLabelStyle: {
        // color: "red",
        // fontSize: 25,
        // },
      }}

      initialRouteName="RestaurantOwnerView">

      <Drawer.Screen name="Home" component={RestaurantOwnerView}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name={"home"} size={20} color={color} />
          ),
        }} />


      <Drawer.Screen name="Edit Food Options" component={FoodEditView} options={{
        drawerIcon: ({ color }) => (
          <AntDesign name={"edit"} size={20} color={color} />
        ),
      }} />

      {/* Why is order page giving me errors? */}

      <Drawer.Screen name="Insert New Food" component={FoodInsertView} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="fast-food-outline" size={20} color={color} />
        ),
      }} />

      <Drawer.Screen name="Edit Restaurant Info" component={RestaurantInsertView} options={{
        drawerIcon: ({ color }) => (
          <AntDesign name={"edit"} size={20} color={color} />
        ),
      }} />
    </Drawer.Navigator>
  );
}


// Drawer Navigation for the Administrator Portal:

function AdminView() {
  return (
    <Drawer.Navigator drawerContent={props => <AdminDrawer{...props} />}
      useLegacyImplementation

      screenOptions={{

        headerTintColor: "#50c864",

        headerStyle: {
          height: 100,
          backgroundColor: "white"
        },
        //  overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: "#50c864",
          width: 255,
        },
        drawerActiveTintColor: {
          color: "#fff",
        },
        drawerItemStyle: {
          color: "#50c864",
        },
        drawerLabelStyle: {
          marginLeft: -20,
        },
        drawerActiveBackgroundColor: {
          color: "#006400",
        },

        // drawerLabelStyle: {
        // color: "red",
        // fontSize: 25,
        // },
      }}

      initialRouteName="Admin">

      <Drawer.Screen name="Home" component={Admin}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name={"home"} size={20} color={color} />
          ),
        }} />


      <Drawer.Screen name="Donations" component={Donations} options={{
        drawerIcon: ({ color }) => (
          <FontAwesome5 name="donate" size={19} color={color} />

        ),
      }} />

      {/* Why is order page giving me errors? */}

      <Drawer.Screen name="Restaurant Requests" component={RestaurantRequests} options={{
        drawerIcon: ({ color }) => (
          <Entypo name="add-to-list" size={20} color={color} />
        ),
      }} />

      <Drawer.Screen name="Current Restaurants" component={AdminRestaurantsView} options={{
        drawerIcon: ({ color }) => (
          <AntDesign name={"profile"} size={20} color={color} />
        ),
      }} />
    </Drawer.Navigator>
  );
}

//in drawwer.screen:

// options={{
//   drawerIcon: ({ color }) => (
//       <AntDesign name={"calendar"} size={20} color={color} />
//   ),
// }}


// Drawer Navigator works through the Stack Navigator. It is referenced through the component portion of certain pages. 

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantOwnerLogIn" component={RestaurantOwnerLogIn} options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantOwnerOrders" component={RestaurantOwnerOrders} options={{ headerShown: false }} />
        <Stack.Screen name="ROOrderDetailView" component={ROOrderDetailView} options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantOwnerView" component={ROView} options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantInsertView" component={RestaurantInsertView} options={{ headerShown: false }} />
        <Stack.Screen name="FoodEditView" component={FoodEditView} options={{ headerShown: false }} />
        <Stack.Screen name="FoodEditForm" component={FoodEditForm} options={{ headerShown: false }} />
        <Stack.Screen name="FoodInsertView" component={FoodInsertView} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogIn" component={AdminLogIn} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterRO" component={RegisterRO} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterAdmin" component={RegisterAdmin} options={{ headerShown: false }} />
        <Stack.Screen name="Admin" component={AdminView} options={{ headerShown: false }} />
        <Stack.Screen name="Donations" component={Donations} options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantsView" component={IndividualView} options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantPage" component={RestaurantPage} options={{ headerShown: false }} />
        <Stack.Screen name="OrderPage" component={OrderPage} options={{ headerShown: false }} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />
        <Stack.Screen name="RecentOrders" component={RecentOrders} options={{ headerShown: false }} />
        <Stack.Screen name="AccountSettings" component={AccountSettings} options={{ headerShown: false }} />
        <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
        <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantRequests" component={RestaurantRequests} options={{ headerShown: false }} />
        <Stack.Screen name="AdminRestaurantsView" component={AdminRestaurantsView} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
