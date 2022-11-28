import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail, IonText} from '@ionic/react';
// import reserveFood from '../components/reserveFood'
import { arrowBack } from 'ionicons/icons';
import '../tab.css';
import { StoreItem } from '../../components/StoreItem';

const Item4: React.FC = () => {
  const ItemProps = {
    "id": 4,
    "store": 3,
    "name": "Buddha Satay Bowl",
    "originalPrice": 10.00,
    "discountPrice": 6.00,
    "servingsLeft": 3,
    "imgUrl": "https://www.freshii.com/static/img/bowls-buddas-satay.1266cfb.jpg"
  }
  
  return (
    StoreItem(ItemProps)
    );
  };
    
    export default Item4;

function reserve(): React.MouseEventHandler<HTMLIonButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
