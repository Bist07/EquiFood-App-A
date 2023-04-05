import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../src/aws-exports.js'
import { RestaurantInsert } from './RestaurantAPI.js';
import { FoodInsert } from './MenuAPI.js';

Amplify.configure(awsconfig);

///// upload image ////
export const fetchImageUri = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
}
export const InsertForm = async (name, file, type, data) => {
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
            FoodInsert(data);
          }

          if (type === 'restaurant') {
            RestaurantInsert(data);
          }

          if (type === 'customer') {
            //CustomerInsert(data);
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

