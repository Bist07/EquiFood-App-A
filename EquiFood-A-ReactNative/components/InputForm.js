import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import stylesR from './stylesR'

const InputForm = (props) => {
  const title = props.title;
  const placeholder = props.placeholder;
  return (
    <View>
        <Text style={{marginBottom:5}}>{title}</Text>
        <View style={stylesR.inputForm}>
            <TextInput placeholder={placeholder}  style={{ flex:1, paddingVertical:0}} keyboardType="default" />
        </View>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({})