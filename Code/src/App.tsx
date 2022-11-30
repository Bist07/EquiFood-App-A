import { Link, Route } from 'react-router-dom';
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
import { ShoppingCartProvider } from './context/ShoppingCartContext';


setupIonicReact();

const App: React.FC = () => (
  <ShoppingCartProvider>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
          <Route path="/tab1"><Tab1/></Route>
          <Route path="/tab2"><Tab2/></Route>
          <Route path="/tab3"><Tab3/></Route>
          <Route path="/tab4"><Tab4/></Route>
          <Route path="/Profile"><Profile/></Route>
          <Route path="/food/Item1"><Item1/></Route>
          <Route path="/food/Item2"><Item2/></Route>
          <Route path="/food/Item3"><Item3/></Route>
          <Route path="/food/Item4"><Item4/></Route>
          <Route path="/food/Item6"><Item6/></Route>
          <Route path="/food/Item7"><Item7/></Route>
          <Route path="/Cart"><Cart/></Route>
          {/* <Route path="/">
            <Link to="/tab1" />
          </Route> */}
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
  </ShoppingCartProvider>
);



export default App;
