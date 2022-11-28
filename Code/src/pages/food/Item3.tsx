import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail, IonText} from '@ionic/react';
// import reserveFood from '../components/reserveFood'
import { arrowBack } from 'ionicons/icons';
import '../tab.css';
import { StoreItem } from '../../components/StoreItem';

const Item3: React.FC = () => {
  const ItemProps = {
    "id": 3,
    "store": 2,
    "name": "White Chocolate Macadamian Cookie",
    "originalPrice": 2.00,
    "discountPrice": 0.50,
    "servingsLeft": 12,
    "imgUrl": "https://images.chickadvisor.com/item/47200/375/i/subway-cookies.jpg?ic=3"
  }
  
  return (
    StoreItem(ItemProps)
    );
  };
    
    export default Item3;

function reserve(): React.MouseEventHandler<HTMLIonButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
