import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { restaurant, person, cartOutline } from "ionicons/icons";

export function Navbar() {
    <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
        <IonIcon icon={restaurant} />
        <IonLabel>Browse Restaurants</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Profile" href="/Profile">
        <IonIcon icon={person} />
        <IonLabel>Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="cart" href="/Cart">
        <IonIcon icon={cartOutline} />
        <IonLabel>Cart</IonLabel>
        </IonTabButton>
    </IonTabBar>
}