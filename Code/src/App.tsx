import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { restaurant, person, cartOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Profile from './pages/Profile';
import Item1 from './pages/food/Item1';
import Item2 from './pages/food/Item2';
import Item3 from './pages/food/Item3';
import Item4 from './pages/food/Item4';
import Item6 from './pages/food/Item6';
import Item7 from './pages/food/Item7';
import Cart from './pages/Cart';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1" component={Tab1}/>
          <Route exact path="/tab2" component={Tab2}/>
          <Route exact path="/tab3" component={Tab3}/>
          <Route exact path="/tab4" component={Tab4}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/food/Item1" component={Item1}/>
          <Route exact path="/food/Item2" component={Item2}/>
          <Route exact path="/food/Item3" component={Item3}/>
          <Route exact path="/food/Item4" component={Item4}/>
          <Route exact path="/food/Item6" component={Item6}/>
          <Route exact path="/food/Item7" component={Item7}/>
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/">
            <Redirect exact from="/" to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={restaurant} />
            <IonLabel>Browse Restaurants</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cart" href="/Cart">
            <IonIcon icon={cartOutline} />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);



export default App;
