import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { arrowBack } from 'ionicons/icons';
import './tab.css';

// This page shows what a generic browse restaurant page would look like.

const Tab2: React.FC = () => {
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
          <img className='image' alt="Subway" src="https://order.subway.com/en-ca/-/media/northamerica/Canada/HomePageLogOut/Catering_Hockey-Night_3369-S.jpg?la=en-CA&h=640&w=640&mw=1280&hash=8360841CC2C4395EC39094BEF225FDC0" />
         <IonCardHeader className='title'>
            SUBWAY
          </IonCardHeader>

    <IonList className='productsAvailable' class='scroll-content' lines="none">
      <IonItem button detail lines="full" href='/tab6'>
        <IonThumbnail slot="start" >
          <img alt="Soup" src="https://assets3.thrillist.com/v1/image/3110984/1584x1054/crop;webp=auto;jpeg_quality=60.jpg" />
        </IonThumbnail>
        <IonLabel>Brocolli Cheddar Soup | $0.85/serving  | Available: 6 servings</IonLabel>
      </IonItem>

      <IonItem button detail lines="full">
      <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>Custom Item</IonLabel>
      </IonItem>

      <IonItem button detail lines="full">
      <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>Custom Item</IonLabel>
      </IonItem>

      <IonItem button detail lines="full">
      <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>Custom Item</IonLabel>
      </IonItem>

      <IonItem button detail lines="full">
      <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>Custom Item</IonLabel>
      </IonItem>
      </IonList>
          </IonCard> 

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
