import React from 'react';
import { Route } from 'react-router-dom';
import Tabs from './RoutesTab';
import PageTwo from './pages/PageTwo';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import PageNotFound from './pages/PageNotFound';
import Slides from '../components/Slides';
import ChatList from './pages/chat/ChatList';
import ChatMessage from './pages/chat/ChatMessage';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import Webview from './pages/Webview';
import Pokemon from './pages/Pokemon';

const Routes = () => {
   return (
      <>
         <IonReactRouter>
            <IonRouterOutlet id="main">
               <Route path="/404" render={() => <PageNotFound />} />
               <Route path="/login" render={() => <Login />} />
               <Route path="/signup" render={() => <Signup />} />
               <Route path="/tabs" render={() => <Tabs />} />
               <Route path="/slides" render={() => <Slides />} exact={true} />
               <Route path="/chat" render={() => <ChatList />} exact={true} />
               <Route path="/pokemon" render={() => <Pokemon />} exact={true} />
               <Route path="/chat/message" render={() => <ChatMessage />} exact={true} />
               <Route path="/pagetwo" render={() => <PageTwo />} />
               <Route path="/webview" render={() => <Webview />} />
               <Route path="/" render={() => <Login />} exact={true} />
               {/* <Route render={() => <Redirect to="/tabs" />} /> */}
               {/* <Route render={() => <PageNotFound />} /> */}
            </IonRouterOutlet>
         </IonReactRouter>
      </>

   );
};

export default Routes;