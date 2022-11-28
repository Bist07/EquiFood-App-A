import React, { createRef } from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
} from "@ionic/react";
import "./tab.css";

const Cart: React.FC = () => {
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

          <IonList>
            <IonItem>

            </IonItem>
          </IonList>
       </>
      );
};

export default Cart;