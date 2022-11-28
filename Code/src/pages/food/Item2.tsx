import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail, IonText} from '@ionic/react';
// import reserveFood from '../components/reserveFood'
import { arrowBack } from 'ionicons/icons';
import '../tab.css';

const Item2: React.FC = () => {
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
        <IonButton href='/tab2'>
            <IonIcon icon={arrowBack} />
        </IonButton>

        <IonCardHeader>
          <IonText className='foodHeader'>Black Forest Ham sub </IonText>
        </IonCardHeader>
        <img className='foodOptions' alt="soup" src= "https://www.subway.com/ns/images/menu/CAN/ENG/Subway_6in_BlackForestHam_234x140_72_RGB.jpg" />
         
        <IonText className='foodHeader'>Original Price: $10.00/serving </IonText>
          <IonText className='foodHeader'>Discounted Price: $5.50/serving </IonText>
        <IonText className='foodHeader'>Currently Available: 4 servings</IonText>
        </IonCard>
        
        <IonCard>
          <IonButton className='reserve' >Reserve Now</IonButton>
          {/* onClick={reserveFood()}  */}
        </IonCard>
        </IonContent>

        </IonPage>
        );
    };
    
    export default Item2;

function reserve(): React.MouseEventHandler<HTMLIonButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
