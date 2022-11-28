import React, { createRef } from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonContent,
  IonText,
} from "@ionic/react";
import "./tab.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
import items from '../data/items.json'
import { CartItem } from "../components/CartItem";

const Cart: React.FC = () => {
  const { cartItems } = useShoppingCart()
    return (
        <>
          <IonHeader>
            <IonToolbar>
              <IonTitle ></IonTitle>
              <img className="logo" src="https://media-exp1.licdn.com/dms/image/C560BAQGjztjyiqkEVw/company-logo_200_200/0/1623879912263?e=2147483647&v=beta&t=6Xexf0f_AOKuGeqmq25Kd99KnazSsYGi7atu1idBhRs" alt="Browse Restaurants"/>
              {/* <img className="user" src="https://media-exp1.licdn.com/dms/image/C560BAQGjztjyiqkEVw/company-logo_200_200/0/1623879912263?e=2147483647&v=beta&t=6Xexf0f_AOKuGeqmq25Kd99KnazSsYGi7atu1idBhRs" alt="Browse Restaurants"/> */}
           
            </IonToolbar>
            <IonToolbar>
            <IonSearchbar color="light" showClearButton="always" placeholder="Search Restaurant" ></IonSearchbar>
          </IonToolbar>
          </IonHeader>

          <IonContent class="scroll-content" className="list" role="feed">
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))} 

            <h1 style={{textAlign:'center'}}>
            Total{" "}
            {cartItems.reduce((total, cartItem) => {
            const item = items.find(i => i.id === cartItem.id)
                return total + (item?.discountPrice || 0)}, 0
                )}
            </h1>
          </IonContent>
          
          <IonText>
              
          
          </IonText>
       </>
      );
};

export default Cart;