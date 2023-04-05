import {
  Button,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import TimePicker from "../components/TimePicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  addToCart,
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";
import { insertFoodOrder, insertOrderMenuItem } from "../API/OrdersAPI";

const ViewCart = (props) => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const totalOriginalPrice = cart
  .map((item) => item.original_price * item.quantity)
  .reduce((prev, curr) => prev + curr, 0);

  const totalDiscount = totalOriginalPrice - totalPrice;

  const [custId, setCustId] = useState(1);
  const [restId, setRestId] = useState(1);
  const [menuItemID, setMenuItemID] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [buttonShow, setButtonShow] = useState(true);
  const [modal, setModal] = useState(false);

  const formattedPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
  let formattedTime = date.getHours() + ':' + date.getMinutes();
  const dispatch = useDispatch();
  const restaurantName = props.restaurantName;

  // console.log(date);
  
  
  const onTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    formattedTime = tempDate.getHours() + ':' + tempDate.getMinutes();

    const orderDate = new Date();
    // console.log(orderDate);
    // console.log(tempDate);

    if(orderDate > tempDate){
      alert("You have selected a time in the past. Please don't");
    }
  }

  const showTimePicker = () => {
    setButtonShow(false);
    setShow(true);
  }

  const placeOrder = () => {
    setModal(false);
    let formattedTime = date.getHours() + ':' + date.getMinutes();
    setRestId(cart[0].restaurant_id);

    menuOrderItemList = cart.map(item => {
      return {"menu_item_id": item["id"], "qty_ordered": item["quantity"]}
    });

    console.log(menuOrderItemList)

    const formattedSQLDateTime = date.toISOString().slice(0, 19).replace('T', ' ');
    insertFoodOrder(custId, restId, totalPrice, formattedSQLDateTime, totalDiscount, menuOrderItemList);
    
    navigation.navigate("OrderPage", {
      restaurantName: restaurantName,
      orderTime: formattedTime,
    });
  };

  const checkout = () => {
    return (
      <View id="slide-screen" style={styles.slideScreen}>
        <Pressable style={styles.closeModal} onPress={() => setModal(false)}>
          <AntDesign name="closecircle" size={36} color="black" />
        </Pressable>
        <View style={styles.checkoutScreen}>
          <Text style={styles.checkoutTopText}>
            Checkout
          </Text>
          <View class="line" style={styles.line}/>

          <ScrollView>
            <Text style={{ textAlign: "center", paddingTop: 10, fontSize: 18 }}>
              Currently In Cart
            </Text>
            {/* Taking everything in the cart and displaying them on the  */}
            {cart.map((item, key) => (
              <View style={styles.cartItems} key={key}>
                <Text style={styles.cartItemText}>
                  {item.item_name}
                </Text>
                {/* <Pressable style={styles.itemCounterBox}> */}
                  {/* <Pressable
                    onPress={() => {
                      dispatch(decrementQuantity(item));
                    }}>
                    <Text style={styles.itemCountButtons}>
                      -
                    </Text>
                  </Pressable> */}

                  {/* <Pressable> */}
                    <Text style={styles.cartItemText}>
                      Quantity: {item.quantity}
                    </Text>
                  {/* </Pressable> */}

                  {/* <Pressable
                    onPress={() => {
                      dispatch(incrementQuantity(item));
                    }}>
                    <Text style={styles.itemCountButtons}>
                      +
                    </Text>
                  </Pressable> */}
                {/* </Pressable> */}
                <Text style={styles.cartItemText}>
                  ${(Math.round(item.price * 100) / 100).toFixed(2)}
                </Text>
              </View>
            ))}

            <View class="line" style={styles.line}/>
          </ScrollView>
        </View>

        <View style={{ padding: 10, backgroundColor: "white" }}>
          <View style={styles.totalPrice}>
            <Text style={{fontSize: 27 , marginLeft:3 }}>
              Total Price:
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              ${formattedPrice}{" "}
            </Text>
          </View>
        </View>

        <View style={styles.pickupTime}>
          <Text style={{fontSize: 23 , marginTop:4, marginLeft:6}}>
            Pickup Time: 
          </Text>
          {buttonShow && (<Button color={"#50c864"} id="timeButton" onPress={showTimePicker} title="Click to pick a Time!" />)}
          {show && (<DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={'time'}
            is24Hour={false}
            display='default'
            onChange={onTimeChange}
            minuteInterval={15}
          />
          )}
        </View>

        <Pressable
          onPress={() => {
            placeOrder();
            dispatch(cleanCart());
          }}
          style={{ backgroundColor: "#50c864", padding: 20 }}
        >
          <Text style={styles.checkoutText}>
           Checkout
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal(!modal);
        }}
      >
        {checkout()}
      </Modal>

      <View>
        {totalPrice === 0 ? null : (
          <Pressable
            onPress={() => setModal(true)}
            style={styles.viewCartSquare}
          >
            <Text style={{ textAlign: "center" }}>
              View Cart ${formattedPrice}
            </Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  viewCartSquare: {
    backgroundColor: "#98FB98",
    borderColor: "black",
    borderWidth: 1,
    width: 200,
    borderRadius: 4,
    padding: 10,
    position: "absolute",
    bottom: 40,
    left: 100,
  },

  dateTimePicker: {
    fontWeight:'bold',
    fontSize:20,
  },

  slideScreen: {
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
  },

  closeModal: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  checkoutScreen: {
    height: 300,
    backgroundColor: "white",
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },

  checkoutTopText: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 8,
    marginBottom: 8,
  },

  line: { 
    borderColor: "#F0F0F0", 
    height: 1, 
    borderWidth: 1 
  },

  cartItems: {
    marginTop:5,
     
    display: "flex",
    flexDirection: "row",
    // flexBasis: "30%",
    // alignContent: "center",
    // justifyContent: "space-between",
    padding: 10,
  },

  cartItemText: { 
    color: "black", 
    paddingTop:6, 
    fontWeight: "500", 
    fontSize: 17,
    flex: '1 1 auto',
  },

  itemCounterBox: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    borderColor: "#BEBEBE",
    borderWidth: 0.5,
    borderRadius: 10,
  },

  itemCountButtons: {
    fontSize: 20,
    color: "#50c864",
    paddingHorizontal: 6,
    fontWeight: "600",
  },

  itemCount: {
    fontSize: 19,
    color: "#50c864",
    paddingHorizontal: 8,
    fontWeight: "600",
  },

  totalPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pickupTime: { 
    padding: 10, 
    paddingTop: 0, 
    backgroundColor: "white", 
    flexDirection:"row", 
    justifyContent:'space-between' 
  },

  checkoutText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 24,
      color: "white",
  },
  
});
