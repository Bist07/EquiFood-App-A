import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Restaurants from "./Restaurants";
// import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";


const stylesR = StyleSheet.create({

    /*Restaurants.js page */
    borders:{
        margin: 5,
        marginBottom: 0,
        borderColor: "green",
        borderWidth:1,
        overflow:"hidden",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    adminBorders:{
        margin: 5,
        marginBottom: 0,
        borderColor: "green",
        borderWidth:1,
        overflow:"hidden",
        borderRadius:7,
    },

    imageStyle:{
        width: "100%",
        aspectRatio: 1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },

    descriptionCard:{
        marginLeft: 5,
        marginRight: 5,
        padding: 8,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    restaurantName:{
        fontSize: 24, 
        fontWeight: "600" 
    },
    restaurantHours:{
        fontSize: 15,
        color: "gray",
        marginVertical: 7
    },
    rating:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#17B169",
        padding: 5,
        borderRadius: 6,
    },
    ratingText:{
        fontSize: 16,
        fontWeight: "bold",
        paddingRight: 5,
        color: "white",
    },
    foodCount:{
        position: "absolute",
        right: 20,
        top: 20,
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
    },
    betweenCardBreak:{
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "white",
        padding: 5,
        marginBottom: 6,
    },
    /*Continued for Menu.js page */
    itemDisplay:{
        marginBottom: 20,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemName:{
        fontSize: 18,
        fontWeight: "bold", 
        marginBottom: 10
    },
    originalPrice:{
        fontSize: 20, 
        textDecorationLine: "line-through"
    },
    currentPrice:{
        fontSize: 20, 
        fontWeight: "bold" 
    },
    servingsCount:{
        fontSize: 18,
        marginTop: 10
    },
    itemIncrement:{
        position: "absolute",
        left: 15,
        top: 90,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
    },
    addButton:{
        position: "absolute",
        top: 90,
        left: 15,
        flexDirection: "row",
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
    },
    decreaseItem:{
        fontSize: 20, 
        color: "green", 
        paddingHorizontal: 6
    },
    itemCount:{
        fontSize: 20,
        color: "green", 
        paddingHorizontal: 6
    },
    increaseItem:{
        fontSize: 20, 
        color: "green", 
        paddingHorizontal: 10
    }
    /*Continued for ViewCart.js page */
})


export default stylesR;