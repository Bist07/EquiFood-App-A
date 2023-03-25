import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchFilter = (data, input, setInput) => {
    return(
        <FlatList data={data} renderItem={({item}) => {
            return(
                    <View>
                        <Text>SearchFilter</Text>
                    </View>
                )

        }}/>
    );
}

export default SearchFilter

const styles = StyleSheet.create({})