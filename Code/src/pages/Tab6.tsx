import React, { createRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInfiniteScroll, ScrollDetail,IonInfiniteScrollContent, IonThumbnail, IonText} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { arrowBack } from 'ionicons/icons';
import './tab.css';

const Tab6: React.FC = () => {
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
        <IonText className='foodHeader'>Brocolli Cheddar Soup </IonText>
        </IonCardHeader>
        <img className='foodOptions' alt="soup" src= "https://assets3.thrillist.com/v1/image/3110984/1584x1054/crop;webp=auto;jpeg_quality=60.jpg" />
         
        <IonText className='foodHeader'>Original Price: $2.00/serving </IonText>
        <IonText className='foodHeader'>Discounted Price: $0.85/serving </IonText>
        <IonText className='foodHeader'>Currently Available: 6 servings</IonText>
        </IonCard>
        
        <IonCard>
        <IonButton className='reserve'>Reserve Now</IonButton>
        </IonCard>
        </IonContent>

        </IonPage>
        );
    };
    
    export default Tab6;