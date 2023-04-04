import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonFab, IonFabButton, IonContent } from '@ionic/react';
import { apertureOutline, camera, cog, flash, list } from 'ionicons/icons';

import Home from './tabs/Home';
import Lists from './tabs/Lists';
import ListDetail from '../../components/ListDetail';
import Settings from './tabs/Settings';
import Contents from './Contents';

const Tabs = () => {

   return (
      <>
         <IonContent scrollEvents={true}>

            <IonTabs>
               <IonRouterOutlet>
                  <Route path="/" render={() => <Home />} exact={true} />
                  <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
                  <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
                  <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
                  <Route path="/tabs/contents" render={() => <Contents />} exact={true} />
                  <Route path="/tabs/home" render={() => <Home />} exact={true} />
                  <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
               </IonRouterOutlet>

               <IonTabBar slot="bottom">
                  <IonTabButton tab="tab1" href="/tabs/home">
                     <IonIcon icon={flash} />
                     <IonLabel>Home</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab2" href="/tabs/lists">
                     <IonIcon icon={list} />
                     <IonLabel>Lists</IonLabel>
                  </IonTabButton>
                  <IonTabButton></IonTabButton>
                  <IonTabButton tab="tab3" href="/tabs/settings">
                     <IonIcon icon={cog} />
                     <IonLabel>Settings</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab4" href="/tabs/contents">
                     <IonIcon icon={apertureOutline} />
                     <IonLabel>Content</IonLabel>
                  </IonTabButton>
               </IonTabBar>
            </IonTabs>

            <IonFab vertical="bottom" horizontal="center">
               <IonFabButton color="danger" routerLink='/tabs/home' >
                  <IonIcon icon={camera}></IonIcon>
               </IonFabButton>
            </IonFab>

         </IonContent>
      </>
   );
};

export default Tabs;
