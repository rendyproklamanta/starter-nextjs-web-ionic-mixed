import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { cog, flash, list } from 'ionicons/icons';

import Home from './tabs/Feed';
import Lists from './tabs/Lists';
import ListDetail from '../../components/ListDetail';
import Settings from './tabs/Settings';
import Contents from './chat/ChatList';

const Tabs = () => {
   return (
      <IonTabs>

         <IonRouterOutlet>
            <Route path="/tabs/feed" render={() => <Home />} exact={true} />
            <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
            <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
            <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
            <Route path="/tabs/contents" render={() => <Contents />} exact={true} />
            <Route path="/tabs" render={() => <Redirect to="/tabs/feed" />} exact={true} />
         </IonRouterOutlet>

         <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tabs/feed">
               <IonIcon icon={flash} />
               <IonLabel>Feed</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tabs/lists">
               <IonIcon icon={list} />
               <IonLabel>Lists</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tabs/settings">
               <IonIcon icon={cog} />
               <IonLabel>Settings</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tabs/contents">
               <IonIcon icon={cog} />
               <IonLabel>Content</IonLabel>
            </IonTabButton>
         </IonTabBar>

      </IonTabs>
   );
};

export default Tabs;
