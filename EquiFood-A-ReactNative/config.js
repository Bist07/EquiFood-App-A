import { Platform } from "react-native";

if (Platform.OS === 'ios') {
    var url = "http://192.168.1.71";  //Amrita's IP
    // var url = "http://localhost";
}
if (Platform.OS === 'android') {
    var url = "http://192.168.248.227";
}

export default config = {
    // CHANGE TO A URL THAT WORKS FOR YOU 
    // Ios can use localhost, android requires ipv4
    local: {
        url: url,
        port: "5001",
    }
}
