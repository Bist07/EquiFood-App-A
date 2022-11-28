import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonIcon,  IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { arrowBack } from 'ionicons/icons';

import './tab.css';

// This page shows what a generic browse restaurant page would look like.

const Tab4: React.FC = () => {
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
      <IonButton href='/tab1'> 
        <IonIcon icon={arrowBack} />
        </IonButton>
          <img className='image' alt="Jugo Juice" src="https://foodgressing.com/wp-content/uploads/2018/06/jugo-juice-new-menu-lineup-2018.jpg.webp" />
         <IonCardHeader className='title'>
            JUGO JUICE
          </IonCardHeader>

    <IonList className='productsAvailable' class='scroll-content' lines="none">

        <IonItem button detail lines="full" href='/food/Item6'>
          <IonThumbnail slot="start" >
            <img alt="Smoothie" src="https://jugojuice.com/wp-content/uploads/2021/04/JJ21_WEB_001_SMOOTHIESnJUICES_Mocha-Protein.png" />
          </IonThumbnail>
          <IonLabel>Mocha Protein Smoothie | $3.50/serving  | Available: 2 servings</IonLabel>
        </IonItem>

        <IonItem button detail lines="full" href='/food/Item6'>
          <IonThumbnail slot="start" >
            <img alt="Smoothie" src="https://jugojuice.com/wp-content/uploads/2021/04/SMOOTHIE_MightyKale-1.png" />
          </IonThumbnail>
          <IonLabel>Mighty Kale Smoothie | $3.50/serving  | Available: 1 servings</IonLabel>
        </IonItem>
        
    </IonList>
          </IonCard> 

      </IonContent>
    </IonPage>
  );
};

export default Tab4;