import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      name: '',
      description: '',
      cuisine: '',
      address: '',
      hours: ''
   }
   handleName = (text) => {
      this.setState({ name: text })
   }
   handleDescription = (text) => {
      this.setState({ description: text })
   }
   handleAddress = (text) => {
    this.setState({address: text})
   }
   handleCuisine = (text) => {
    this.setState({cuisine: text})
   }
   handleHours = (text) => {
    this.setState({hours: text})
   }

   insert = (name, description, address, cuisine, hours) => {
      alert('name: ' + name + 
      ', description: ' + description +
      ', address: ' + address +
      ', cuisine: ' + cuisine +
      ', hours: ' + hours)
      console.log(this.state);
   }
   render() {
      return (


         <View style = {styles.container}>
          <Text style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FAF9F6",
              textAlign: 'center',
              borderWidth: 2,
              borderColor: "#50c864",
              fontSize: 20,
              padding: 11,
              color: '#50c864',
              fontWeight:'bold',
              marginLeft: 27,
              marginRight: 27,
              marginTop:20,
            }}
          >Input Restaurant Info</Text>

            <TextInput style = {styles.input}
               
               underlineColorAndroid = "transparent"
               placeholder = "Restaurant Name"
               placeholderTextColor = "#50c864"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            
            <TextInput style = {styles.input}
              
               underlineColorAndroid = "transparent"
               placeholder = "Restaurant Description"
               placeholderTextColor = "#50c864"
               autoCapitalize = "none"
               onChangeText = {this.handleDescription}/>

            <TextInput style = {styles.input}
          
               underlineColorAndroid = "transparent"
               placeholder = "Cuisine Style Description"
               placeholderTextColor = "#50c864"
               autoCapitalize = "none"
               onChangeText = {this.handleCuisine}/>

            <TextInput style = {styles.input}
              
               underlineColorAndroid = "transparent"
               placeholder = "Restaurant Address"
               placeholderTextColor = "#50c864"
               autoCapitalize = "none"
               onChangeText = {this.handleAddress}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Restaurant Hours of Operation"
               placeholderTextColor = "#50c864"
               autoCapitalize = "none"
               onChangeText = {this.handleHours}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.insert(this.state.name, this.state.description, this.state.address, this.state.cuisine, this.state.hours)
                 
               }>
               <Text style = {{
                textAlign: 'center',
                color: 'white',
               }}
               > Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
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
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#50c864',
      padding: 10,
      fontWeight: 'bold',
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
