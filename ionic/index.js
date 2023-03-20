import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Tabs from './pages/Tabs';
import PageTwo from './pages/PageTwo';

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
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from '../pages/404';

setupIonicReact({});

window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
   try {
      await StatusBar.setStyle({
         style: status.matches ? Style.Dark : Style.Light,
      });
   } catch { }
});

const Ionic = () => {
   return (
      <IonApp>
         <IonReactRouter>
            <IonRouterOutlet id="main">
               <Route path="/app/login" render={() => <Login />} />
               <Route path="/app/signup" render={() => <Signup />} />
               <Route path="/app/tabs" render={() => <Tabs />} />
               <Route path="/app/pagetwo" render={() => <PageTwo />} />
               <Route path="/" render={() => <Redirect to="/app/tabs/feed" />} exact={true} />
               <Route render={() => <Redirect to="/app/tabs" />} />
               {/* <Route path="*" render={() => <PageNotFound />} /> */}
            </IonRouterOutlet>
         </IonReactRouter>
      </IonApp>
   );
};

export default Ionic;
