import { IonButton, IonCard, IonCardHeader, IonCol, IonContent, IonRow, IonText } from "@ionic/react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import items from "../data/items.json"

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps){
    const { removeFromCart } = useShoppingCart()
    const item = items.find(i => i.id === id)
    if (item == null) return null

    return (
        <IonRow className='item' style={{display:"relative"}}>
            <img alt="fooditem" src= {item.imgUrl} 
            style={{ marginLeft: '100px' ,width: "200px", height:"150px", objectFit: "cover"}}/>
            <IonCol>
                <IonText style={{fontSize:"1.2rem"}}>Price: ${(Math.round(item.discountPrice*100)/100).toFixed(2)} </IonText>
            <IonButton style={{paddingRight:'70%'}} color="danger" onClick={() => removeFromCart(id)}>Remove From Cart</IonButton>
            </IonCol>
        </IonRow>
        
    )
}