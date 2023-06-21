import React from 'react';
import { Route } from 'react-router-dom';
// import Tabs from './RoutesTab';
import PageTwo from './pages/PageTwo';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import PageNotFound from './pages/PageNotFound';
import Slides from '../components/Slides';
import ChatList from './pages/chat/ChatList';
import ChatMessage from './pages/chat/ChatMessage';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import Webview from './pages/Webview';
import Pokemon from './pages/Pokemon';
import Menu from '../components/Menu';
import Tabs from './pages/tabs/Tabs';
import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
   return (
      <>
         <IonReactRouter>
            <IonSplitPane contentId="main">
               <Menu />
               <IonRouterOutlet id="main">
                  <Route path="/" render={() => <Login />} exact={true} />
                  <Route path="/tabs" render={() => <Tabs />} />
                  <Route path="/404" render={() => <PageNotFound />} />
                  <Route path="/login" render={() => <Login />} />
                  <Route path="/signup" render={() => <Signup />} />
                  <Route path="/tabs" render={() => <Tabs />} />
                  <Route path="/slides" render={() => <Slides />} exact={true} />
                  <Route path="/chat" render={() => <ChatList />} exact={true} />
                  <Route path="/pokemon" render={() => <Pokemon />} exact={true} />
                  <Route path="/chat/message" render={() => <ChatMessage />} exact={true} />
                  <PrivateRoutes>
                     <Route path="/pagetwo" render={() => <PageTwo />} />
                  </PrivateRoutes>
                  <Route path="/webview" render={() => <Webview />} />
               </IonRouterOutlet>
            </IonSplitPane>
         </IonReactRouter>
      </>

   );
};

export default Routes;