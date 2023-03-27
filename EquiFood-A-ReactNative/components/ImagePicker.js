import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../src/aws-exports.js'

Amplify.configure(awsconfig);

export default function ImagePickerButton({ callback }) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri)
            callback(result);
        }
    };



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}

///// upload image ////
export const fetchImageUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
}
export const uploadFile = async (file) => {
    const img = await fetchImageUri(file.uri);
    return Storage.put(`my-image-filename${Math.random()}.jpg`, img, {
        level: 'public',
        contentType: file.type,
        progressCallback(uploadProgress) {
            console.log('PROGRESS--', uploadProgress.loaded + '/' + uploadProgress.total);
        }
    })
        .then((res) => {
            Storage.get(res.key)
                .then((result) => {
                    //   console.log('RESULT --- ', result);
                    let awsImageUri = result.substring(0, result.indexOf('?'))
                    console.log('RESULT AFTER REMOVED URI --', awsImageUri)
                })
                .catch(e => {
                    console.log(e);
                })
        }).catch(e => {
            console.log(e);
        })
}
////end upload img ////