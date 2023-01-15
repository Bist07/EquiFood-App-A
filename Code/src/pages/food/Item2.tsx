import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail, IonText} from '@ionic/react';
// import reserveFood from '../components/reserveFood'
import { arrowBack } from 'ionicons/icons';
import '../tab.css';
import { StoreItem } from '../../components/StoreItem';

const Item2: React.FC = () => {
      const ItemProps = {
        "id": 2,
        "store": 2,
        "name": "Black Forest Ham Sub",
        "originalPrice": 9.99,
        "discountPrice": 5.50,
        "servingsLeft": 4,
        "imgUrl": "https://www.subway.com/ns/images/menu/CAN/ENG/Subway_6in_BlackForestHam_234x140_72_RGB.jpg"
    }
      
      return (
        StoreItem(ItemProps)
        );
      };
    
    export default Item2;

function reserve(): React.MouseEventHandler<HTMLIonButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
