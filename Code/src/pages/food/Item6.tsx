import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail, IonText} from '@ionic/react';
// import reserveFood from '../components/reserveFood'
import { arrowBack } from 'ionicons/icons';
import '../tab.css';
import { StoreItem } from '../../components/StoreItem';

const Item6: React.FC = () => {
  const ItemProps = {
    "id": 6,
    "store": 4,
    "name": "Mocha Protein Smoothie",
    "originalPrice": 6.00,
    "discountPrice": 3.50,
    "servingsLeft": 2,
    "imgUrl": "https://jugojuice.com/wp-content/uploads/2021/04/JJ21_WEB_001_SMOOTHIESnJUICES_Mocha-Protein.png"
  }
  
  return (
    StoreItem(ItemProps)
    );
  };
    
    export default Item6;

function reserve(): React.MouseEventHandler<HTMLIonButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
