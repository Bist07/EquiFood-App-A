import {
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
import {
  addToCart,
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";

const ViewCart = (props) => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart
    .map((item) => item.discountPrice * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const formattedPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const restaurantName = props.restaurantName;

  const placeOrder = (props) => {
    setModal(false);
    navigation.navigate("OrderPage", {
      restaurantName: restaurantName,
    });
  };

  const checkout = () => {
    return (
      <View
        id="slide-screen"
        style={{
          justifyContent: "flex-end",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          flex: 1,
        }}
      >
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
          onPress={() => setModal(false)}
        >
          <AntDesign name="closecircle" size={36} color="black" />
        </Pressable>
        <View
          style={{
            height: 300,
            backgroundColor: "white",
            borderTopRightRadius: 7,
            borderTopLeftRadius: 7,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            Checkout
          </Text>
          <View
            class="line"
            style={{ borderColor: "#F0F0F0", height: 1, borderWidth: 1 }}
          />

          <ScrollView>
            <Text style={{ textAlign: "center", paddingTop: 10, fontSize: 18 }}>
              {" "}
              Currently In Cart{" "}
            </Text>
            {/* Taking everything in the cart and displaying them on the  */}
            {cart.map((item, key) => (
              <View
                style={{
                  marginTop:10,
                  flexDirection: "row",
                  alignContent: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
                key={key}
              >
                <Text
                  style={{ color: "green", paddingTop:6, fontWeight: "500", fontSize: 16 }}
                >
                  {item.name}
                </Text>
                <Pressable
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: "center",
                    borderColor: "#BEBEBE",
                    borderWidth: 0.5,
                    borderRadius: 10,
                  }}
                >
                  <Pressable
                    onPress={() => {
                      dispatch(decrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "green",
                        paddingHorizontal: 6,
                        fontWeight: "600",
                      }}
                    >
                      -
                    </Text>
                  </Pressable>

                  <Pressable>
                    <Text
                      style={{
                        fontSize: 19,
                        color: "green",
                        paddingHorizontal: 8,
                        fontWeight: "600",
                      }}
                    >
                      {item.quantity}
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      dispatch(incrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "green",
                        paddingHorizontal: 6,
                        fontWeight: "600",
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </Pressable>
                <Text
                  style={{ color: "green", paddingTop:6, fontWeight: "500", fontSize: 16 }}
                >
                  ${(Math.round(item.discountPrice * 100) / 100).toFixed(2)}
                </Text>
              </View>
            ))}

            <View
              class="line"
              style={{ borderColor: "#F0F0F0", height: 1, borderWidth: 1 }}
            />
          </ScrollView>
        </View>

        <View style={{ padding: 10, backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              Total Price:{" "}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              ${formattedPrice}{" "}
            </Text>
          </View>
        </View>

        <View style={{ padding: 10, paddingTop: 0, backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Pickup Time:{" "}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              <TimePicker mode="time" />{" "}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => {
            placeOrder();
            dispatch(cleanCart());
          }}
          style={{ backgroundColor: "green", padding: 10 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
              color: "white",
            }}
          >
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
            style={{
              backgroundColor: "#98FB98",
              borderColor: "black",
              borderWidth: 1,
              width: 200,
              borderRadius: 4,
              padding: 10,
              position: "absolute",
              bottom: 40,
              left: 100,
            }}
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

const styles = StyleSheet.create({});
