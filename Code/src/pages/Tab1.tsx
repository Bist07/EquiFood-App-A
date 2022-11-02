import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonThumbnail,
  IonSearchbar,
  IonLabel,
  IonItem,
} from "@ionic/react";
import React from "react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

          <IonItem>
            <IonToolbar>
              <IonThumbnail>
                <img src="assets/icon/ProjectEquiFood.png" alt="Project Equifood Logo" />
                <IonLabel>Item Thumbnail</IonLabel>
              </IonThumbnail>
              
              {/* <IonTitle>Restaurant Catalogue</IonTitle> */}
            </IonToolbar>
          </IonItem>

          <IonToolbar>
            <IonSearchbar></IonSearchbar>
          </IonToolbar>
          
        
      </IonHeader>

      <IonContent>
        <IonCard color="light">
          <img
            alt="Burger King Logo"
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/237px-Burger_King_logo_%281999%29.svg.png"
          />
          <IonCardHeader>
            <IonCardTitle>Burger King</IonCardTitle>
            <IonCardSubtitle>Whopper Wednesday</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Burgers and Fries</IonCardContent>
        </IonCard>

        <IonCard color="light">
          <img
            alt="A&W Logo"
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/A%26W_Canada_Logo.svg/640px-A%26W_Canada_Logo.svg.png"
          />
          <IonCardHeader>
            <IonCardTitle>A&W</IonCardTitle>
            <IonCardSubtitle>Never Frozen Meat</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Burgers and Fries</IonCardContent>
        </IonCard>

        <IonCard color="light">
          <img
            alt="Subway logo"
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg"
          />
          <IonCardHeader>
            <IonCardTitle>Subway</IonCardTitle>
            <IonCardSubtitle>Eat Fresh</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Subs and sub accessories</IonCardContent>
        </IonCard>

        <IonCard color="light">
          <img
            alt="Mcdonalds Logo"
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/McDonald%27s_SVG_logo.svg/613px-McDonald%27s_SVG_logo.svg.png"
          />
          <IonCardHeader>
            <IonCardTitle>Mcdonalds</IonCardTitle>
            <IonCardSubtitle>Yummy</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Bring back the McRib</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
