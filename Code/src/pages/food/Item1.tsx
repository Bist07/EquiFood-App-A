import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail, IonText} from '@ionic/react';
// import reserveFood from '../components/reserveFood'
import { arrowBack } from 'ionicons/icons';
import '../tab.css';
import items from '../../data/items.json'
import { StoreItem } from '../../components/StoreItem';

const Item1: React.FC = () => {
  const ItemProps = {
    "id": 1,
    "store": 2,
    "name": "Brocolli Cheddar Soup",
    "originalPrice": 1.99,
    "discountPrice": 0.85,
    "servingsLeft": 6,
    "imgUrl": "https://assets3.thrillist.com/v1/image/3110984/1584x1054/crop;webp=auto;jpeg_quality=60.jpg"
  }
    return (
      StoreItem(ItemProps)
      );
    };
    
    export default Item1;

function reserve(): React.MouseEventHandler<HTMLIonButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
