import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../src/aws-exports.js'

Amplify.configure(awsconfig);

///// upload image ////
export const fetchImageUri = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
}
export const uploadFile = async (file, imageCallback) => {
  const img = await fetchImageUri(file.uri);
  return Storage.put(`my-image-filename${Math.random()}.jpg`, img, {
    level: 'public',
    contentType: file.type,
    // progressCallback(uploadProgress) {
    //   // console.log('PROGRESS--', uploadProgress.loaded + '/' + uploadProgress.total);
    // }
  })
    .then((res) => {
      Storage.get(res.key)
        .then((result) => {
          //   console.log('RESULT --- ', result);
          let awsImageUri = result.substring(0, result.indexOf('?'))
          imageCallback(awsImageUri);
          // console.log('RESULT AFTER REMOVED URI --', awsImageUri)

        })
        .catch(e => {
          console.log(e);
        })
    }).catch(e => {
      console.log(e);
    })
}

////end upload img ////