import { Platform } from "react-native";

<<<<<<< HEAD
if (Platform.OS === 'ios') {
    // var url = "http://192.168.1.71";  //Amrita's IP
=======
if(Platform.OS === 'ios'){
   // var url = "http://192.168.1.71";  //Amrita's IP
    
>>>>>>> b20a632130e0a2fa19fde063e65f4aded695d414

    var url = "http://localhost";
}
if (Platform.OS === 'android') {
    var url = "http://192.168.0.36";
}

export default config = {
    // CHANGE TO A URL THAT WORKS FOR YOU 
    // Ios can use localhost, android requires ipv4
    local: {
        url: url,
        port: "5001",
    }
}
