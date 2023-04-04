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

import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import Tabs from './pages/Tabs';
import PageTwo from './pages/PageTwo';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import PageNotFound from './pages/PageNotFound';
import Slides from '../components/Slides';
import ChatList from './pages/chat/ChatList';
import ChatMessage from './pages/chat/ChatMessage';

setupIonicReact({});

window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
   try {
      await StatusBar.setStyle({
         style: status.matches ? Style.Dark : Style.Light,
      });
   } catch {
      return null;
   }
});

// Call the element loader after the app has been rendered the first time
defineCustomElements(window);

const Ionic = () => {
   return (
      <IonApp>
         <IonReactRouter>
            <IonRouterOutlet id="main">
               <Route path="/404" render={() => <PageNotFound />} />
               <Route path="/login" render={() => <Login />} />
               <Route path="/signup" render={() => <Signup />} />
               <Route path="/tabs" render={() => <Tabs />} />
               <Route path="/slides" render={() => <Slides />} exact={true} />
               <Route path="/chat" render={() => <ChatList />} exact={true} />
               <Route path="/chat/message" render={() => <ChatMessage />} exact={true} />
               <Route path="/pagetwo" render={() => <PageTwo />} />
               <Route path="/" render={() => <Redirect to="/tabs/home" />} exact={true} />
               {/* <Route render={() => <Redirect to="/tabs" />} /> */}
               <Route render={() => <PageNotFound />} />
            </IonRouterOutlet>
         </IonReactRouter>
      </IonApp>
   );
};

export default Ionic;
