import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonButton, IonIcon, IonCardHeader, IonText } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number,
    store: number,
    name: string,
    originalPrice: number,
    discountPrice: number,
    servingsLeft: number,
    imgUrl: string
}

export function StoreItem({ id, store, name, originalPrice, discountPrice, servingsLeft, imgUrl }: StoreItemProps){
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <img className="logo" src="https://media-exp1.licdn.com/dms/image/C560BAQGjztjyiqkEVw/company-logo_200_200/0/1623879912263?e=2147483647&v=beta&t=6Xexf0f_AOKuGeqmq25Kd99KnazSsYGi7atu1idBhRs" alt="Browse Restaurants"/>
            {/* <button className="b1"><img className="user" src="https://cdn-icons-png.flaticon.com/128/7466/7466362.png" alt="Browse Restaurants"/></button> */}
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
        <IonCard className='item'>
        <IonButton className="back" href={`/tab${store}`}>
            <IonIcon icon={arrowBack} />
        </IonButton>

        <IonCardHeader>
          <IonText className='foodHeader'>{name}</IonText>
        </IonCardHeader>
        <img className='foodOptions' alt="cookie" src= {imgUrl} />
         
        <IonText className='foodHeader'>Original Price: ${originalPrice}/serving </IonText>
          <IonText className='foodHeader'>Discounted Price: ${discountPrice}/serving </IonText>
        <IonText className='foodHeader'>Currently Available: {servingsLeft} servings</IonText>
        </IonCard>
        
        <IonCard>
            {quantity === 0 ? (
            <IonButton className='reserve' onClick={() => increaseCartQuantity(id)}>Reserve Now</IonButton>
            ) : <IonButton className='reserve' color="danger" onClick={() => removeFromCart(id)}>Cancel Reservation</IonButton>
            }
        </IonCard>
        </IonContent>

        </IonPage>
        );
}