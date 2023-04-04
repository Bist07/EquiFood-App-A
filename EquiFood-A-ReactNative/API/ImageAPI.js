import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../src/aws-exports.js'
import axios from 'axios';
import config from '../config';

Amplify.configure(awsconfig);

///// upload image ////
export const fetchImageUri = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
}
export const uploadFile = async (name, file, type, data) => {
  const img = await fetchImageUri(file.uri);
  return Storage.put(`${name}.jpg`, img, {
    level: 'public',
    contentType: file.type,
  })
    .then((res) => {
      Storage.get(res.key)
        .then((result) => {
          data.ImageURL = result.substring(0, result.indexOf('?'))
          if (type === 'food') {
            axios({
              url: `${config.local.url}:${config.local.port}/Menu/FoodInsert`,
              method: 'post',
              data: data,
              headers: {
                'Content-Type': 'application/json'
              },
            }).then(
              alert("Food has been inserted into your restaurant.")
            ).catch((error) => {
              console.log(error);
              alert("An error has occurred when inserting food.");
            });
          }

          if (type === 'restaurant') {
            axios({
              url: `${config.local.url}:${config.local.port}/Restaurant/Insert`,
              method: 'post',
              data: data,
              headers: {
                'Content-Type': 'application/json'
              },
            }).then(
              alert("Restaurant added.")
            ).catch((error) => {
              console.log(error);
              alert("An error has occurred when inserting restaurant.");
            });
          }

        })
        .catch(e => {
          console.log("Upload to storage error 1: " + e);
        })
    }).catch(e => {
      console.log("Upload to storage error 2: " + e);
    })
}
////end upload img ////

export const DeleteFile = async (file) => {
  await Storage.remove(file);
}

