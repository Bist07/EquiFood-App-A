// We will use this in multiple places. 
import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ secureTextEntry, value,setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder= {placeholder}
      style = {styles.input} 
      secureTextEntry={true}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        height: 30,
        borderColor: '#e8e8e8',
        borderWidth:1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,
        alignContent:'center'
    },
    input:{
        alignContent:'center'
    }
})