import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail, IonText} from '@ionic/react';
// import reserveFood from '../components/reserveFood'
import { arrowBack } from 'ionicons/icons';
import '../tab.css';

const Item6: React.FC = () => {
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
        <IonButton href='/tab4'>
            <IonIcon icon={arrowBack} />
        </IonButton>

        <IonCardHeader>
          <IonText className='foodHeader'>Mocha Protein Smoothie </IonText>
        </IonCardHeader>
        <img className='foodOptions' alt="cookie" src= "https://jugojuice.com/wp-content/uploads/2021/04/JJ21_WEB_001_SMOOTHIESnJUICES_Mocha-Protein.png" />
         
        <IonText className='foodHeader'>Original Price: $6.00/serving </IonText>
          <IonText className='foodHeader'>Discounted Price: $3.50/serving </IonText>
        <IonText className='foodHeader'>Currently Available: 2 servings</IonText>
        </IonCard>
        
        <IonCard>
          <IonButton className='reserve' >Reserve Now</IonButton>
          {/* onClick={reserveFood()}  */}
        </IonCard>
        </IonContent>

        </IonPage>
        );
    };
    
    export default Item6;

function reserve(): React.MouseEventHandler<HTMLIonButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
