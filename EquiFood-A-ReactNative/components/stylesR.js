import { createEntityAdapter } from "@reduxjs/toolkit";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
// import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";


const stylesR = StyleSheet.create({

    /*Restaurants.js page */
    card:{
        width:"100%",
        borderColor: "white",
        borderWidth:1,
        borderRadius: 15,
        // margin:7,
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 23,

    },
    borders:{
        // marginBottom: 0,
        width:"100%",
        borderColor: "white",
        // borderWidth:1,
        overflow:"hidden",
        borderRadius: 15,
        borderBottomEndRadius: 0,
        borderBottomLeftRadius:0,
        // padding:1.5,
        // borderTopLeftRadius: 7,
        // borderTopRightRadius: 7
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    adminBorders:{
        margin: 5,
        marginBottom: 0,
        borderColor: "17B169",
        borderWidth:1,
        overflow:"hidden",
        borderRadius:7,
    },

    imageStyle:{
        width: "100%",
        aspectRatio: 2,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomEndRadius: 0,
        // borderTopLeftRadius: 7,
        // borderTopRightRadius: 7,
        shadowOpacity: 0,
        shadowRadius: 0,
    },

    descriptionCard:{
        marginLeft: 0,
        // marginRight: -3,
        padding: 8,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        borderTopLeftRadius:0,
        borderTopEndRadius:0,
        borderRadius: 15,
        // justifyContent: "space-between",
        // textAlign: "center",
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    restaurantName:{
        fontSize: 25,
        textAlign: "center",
        fontWeight: "600",
        shadowOpacity: 0,
        shadowRadius: 0,
        left: 37,
        marginBottom: 2,

    },
    restaurantHours:{
        fontSize: 14,
        color: "gray",
        // marginVertical: 7
        shadowOpacity: 0,
        shadowRadius: 0,
        textAlign: "center",
        left: 40,
    },
    rating:{

        position: "absolute",
        left : 10,
        top: 15,
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        shadowOpacity: 0.17,
        shadowRadius: 4.65,


    },
    ratingText:{
        fontSize: 13,
        fontWeight: "bold",
        paddingRight: 5,
        color: "black",
    },
    foodCount:{
        position: "absolute",
        right: 7,
        top: 16,
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
    },
    betweenCardBreak:{
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "white",
        padding: 5,
        marginBottom: 9,
    },


    /*Continued for Menu.js page */
    itemDisplay:{
        backgroundColor:"#fff",
        borderColor: "#50c864",
        borderWidth:0.5,
        borderRadius: 18,
        shadowOpacity: 0.1, 
        shadowRadius: 2,
        marginBottom: 20,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    itemName:{
        fontSize: 13,
        fontWeight: "bold", 
        marginBottom: 10,
        alignItems: "center",
        textAlign: "center",
    },
    originalPrice:{
        fontSize: 17, 
        textDecorationLine: "line-through",
        alignItems: "center",
        textAlign: "center",
    },
    currentPrice:{
        fontSize: 18, 
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold" 
    },
    servingsCount:{
        fontSize: 18,
        alignItems: "center",
        textAlign: "center",
        marginTop: 10
    },
    itemIncrement:{
        position: "absolute",
        left: 4,
        top: 75,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
        shadowOpacity: 0.1, 
        shadowRadius: 2,
    },
    addButton:{
        position: "absolute",
        top: 75,
        left: 4,
        flexDirection: "row",
        paddingHorizontal: 25,
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
        shadowOpacity: 0.08, 
        shadowRadius: 4,
    },
    decreaseItem:{
        fontSize: 20, 
        color: "#50c864", 
        paddingHorizontal: 6
    },
    itemCount:{
        fontSize: 20,
        color: "#50c864", 
        paddingHorizontal: 6
    },
    increaseItem:{
        fontSize: 20, 
        color: "#50c864", 
        paddingHorizontal: 10
    },
    /*Continued for ViewCart.js page */

    // For RestaurantOwnerView page
    ROButtons:{
        backgroundColor: "#50c864",
        // width: '100%',
        paddingTop:10,
        paddingBottom:10,
        marginLeft:30,
        marginRight:30,
        marginBottom:12,
        borderTopLeftRadius:50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomEndRadius: 50,
        alignItems: "center",
        borderRadius: 18,
        shadowOpacity: 0.1, 
    },

    ROButtonText:{
        backgroundcolor:"white",
        fontSize:20,
        fontWeight: "bold",
        marginTop:10,
        marginBottom:10,
        color:"white",
    },

    FoodInsertView:{
        margin:10,
    },

    inputForm: {
        flexDirection:'row',
        borderColor:'#ccc', 
        borderWidth:2, 
        padding:8, 
        marginBottom:25,
    },

    inputFormButton:{
        backgroundColor: '#50C878',
        width: '50%',
        padding: 15,
        marginVertical: 5,
        marginTop:5,
        alignSelf: "center",
        alignItems: 'center',
        borderRadius: 5
    },

    ROFormButtons:{
        backgroundColor: '#50C878',
        width: '40%',
        padding: 15,
        marginVertical: 5,
        margin:5,
        alignSelf: "center",
        alignItems: 'center',
        borderRadius: 5
    },

    backArrow:{
        backgroundColor: "#006A4E",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },

    centeredBoldText:{
        fontSize: 13,
        fontWeight: "bold", 
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        textAlign: "center",
    },
})


export default stylesR;