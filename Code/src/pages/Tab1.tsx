import React, { createRef } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonInfiniteScroll,
  ScrollDetail,
  IonInfiniteScrollContent,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./tab.css";

const Tab1: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
          <img
            className="logo"
            src="https://media-exp1.licdn.com/dms/image/C560BAQGjztjyiqkEVw/company-logo_200_200/0/1623879912263?e=2147483647&v=beta&t=6Xexf0f_AOKuGeqmq25Kd99KnazSsYGi7atu1idBhRs"
            alt="Browse Restaurants"
          />
          {/* <img className="user" src="https://media-exp1.licdn.com/dms/image/C560BAQGjztjyiqkEVw/company-logo_200_200/0/1623879912263?e=2147483647&v=beta&t=6Xexf0f_AOKuGeqmq25Kd99KnazSsYGi7atu1idBhRs" alt="Browse Restaurants"/> */}
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            color="light"
            showClearButton="always"
            placeholder="Search Restaurant"
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent class="scroll-content" className="list" role="feed">
        <IonList class="scroll-content" lines="none">
          <IonItem role="article">
            <IonCard className="card">
              <img
                className="image"
                alt="Silhouette of mountains"
                src="https://order.subway.com/en-ca/-/media/northamerica/Canada/HomePageLogOut/Catering_Hockey-Night_3369-S.jpg?la=en-CA&h=640&w=640&mw=1280&hash=8360841CC2C4395EC39094BEF225FDC0"
              />
              <IonCardHeader>
                <IonButton
                  className="button"
                  expand="block"
                  fill="outline"
                  color="success"
                  href="/tab2"
                >
                  {" "}
                  Subway{" "}
                </IonButton>
              </IonCardHeader>
            </IonCard>
          </IonItem>

          <IonItem role="article">
            <IonCard className="card">
              <img
                className="image"
                alt="Freshii"
                src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-10/1200x800.jpg?itok=MdGv3Hwg"
              />
              <IonCardHeader>
                <IonButton
                  className="button"
                  expand="block"
                  fill="outline"
                  color="success"
                  href="/tab3"
                >
                  {" "}
                  Freshii{" "}
                </IonButton>
              </IonCardHeader>
            </IonCard>
          </IonItem>

          <IonItem role="article">
            <IonCard className="card">
              <img
                className="image"
                alt="Jugo Juice"
                src="https://kaleandkrunches.com/wp-content/uploads/2017/11/IMG_0391.jpg"
              />
              <IonCardHeader>
                <IonButton
                  className="button"
                  expand="block"
                  fill="outline"
                  color="success"
                  href="/tab4"
                >
                  {" "}
                  Jugo Juice{" "}
                </IonButton>
              </IonCardHeader>
            </IonCard>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default Tab1;

//             <Redirect to="/tab1" />
//</Route>
