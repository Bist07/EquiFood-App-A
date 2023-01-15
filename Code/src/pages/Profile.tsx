import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './tab.css';

const Profile: React.FC = () => {

  return (
    <>
    
      <IonHeader>
        <IonToolbar>
          <IonTitle ></IonTitle>
          <img className="logo" src="https://media-exp1.licdn.com/dms/image/C560BAQGjztjyiqkEVw/company-logo_200_200/0/1623879912263?e=2147483647&v=beta&t=6Xexf0f_AOKuGeqmq25Kd99KnazSsYGi7atu1idBhRs" alt="Browse Restaurants"/>
          {/* <img className="user" src="https://media-exp1.licdn.com/dms/image/C560BAQGjztjyiqkEVw/company-logo_200_200/0/1623879912263?e=2147483647&v=beta&t=6Xexf0f_AOKuGeqmq25Kd99KnazSsYGi7atu1idBhRs" alt="Browse Restaurants"/> */}
       
        </IonToolbar>
        <IonToolbar>
        <IonSearchbar color="light" showClearButton="always" placeholder="Search Restaurant" ></IonSearchbar>
      </IonToolbar>
      </IonHeader>
   </>
  );
};

export default Profile;