import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';

import Home from './Feed';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';
import Slides from './Slides';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/app/tabs/feed" render={() => <Home />} exact={true} />
        <Route path="/app/tabs/lists" render={() => <Lists />} exact={true} />
        <Route path="/app/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/app/tabs/settings" render={() => <Settings />} exact={true} />
        <Route path="/app/tabs/slides" render={() => <Slides />} exact={true} />
        <Route path="/app/tabs" render={() => <Redirect to="/app/tabs/feed" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/app/tabs/feed">
          <IonIcon icon={flash} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/app/tabs/lists">
          <IonIcon icon={list} />
          <IonLabel>Lists</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/app/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/app/tabs/slides">
          <IonIcon icon={cog} />
          <IonLabel>Slides</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
