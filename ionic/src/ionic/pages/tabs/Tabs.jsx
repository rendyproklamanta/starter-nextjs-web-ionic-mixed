import React, { useState } from "react";
import {
   IonTabs,
   IonRouterOutlet,
   IonTabBar,
   IonTabButton,
   IonIcon,
   IonLabel,
   IonContent,
   IonFab,
   IonFabButton
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { informationCircle, home, cog, camera, list } from "ionicons/icons";
import About from "./About";
import Lists from "./Lists";
import Home from "./Home";
import Settings from "./Settings";
import ListDetail from "../../../components/ListDetail";
import Contents from "./Contents";
import { takeCamera } from "../../../utils/takeCamera";

const Tabs = () => {
   const [image, setImage] = useState('');

   const handleCamera = async () => {
      const result = await takeCamera();
      if (result) {
         setImage(result);
         console.log("🚀 ~ file: Tabs.jsx:25 ~ Tabs ~ image:", image);
      }
   };

   return (
      <IonContent>
         <IonTabs>
            <IonRouterOutlet>
               <Redirect exact path="/tabs" to="/tabs/home" />
               <Route path="/tabs/about" render={() => <About />} exact={true} />
               <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
               <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
               <Route path="/tabs/home" render={() => <Home />} exact={true} />
               <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
               <Route path="/tabs/contents" render={() => <Contents />} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
               <IonTabButton tab="home" href="/tabs/home">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
               </IonTabButton>
               <IonTabButton tab="lists" href="/tabs/lists">
                  <IonIcon icon={list} />
                  <IonLabel>List</IonLabel>
               </IonTabButton>
               <IonTabButton></IonTabButton>
               <IonTabButton tab="settings" href="/tabs/settings">
                  <IonIcon icon={cog} />
                  <IonLabel>settings</IonLabel>
               </IonTabButton>
               <IonTabButton tab="contents" href="/tabs/contents">
                  <IonIcon icon={informationCircle} />
                  <IonLabel>Content</IonLabel>
               </IonTabButton>
            </IonTabBar>
         </IonTabs>

         <IonFab vertical="bottom" horizontal="center">
            <IonFabButton color="danger" onClick={handleCamera} >
               <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
         </IonFab>
      </IonContent>
   );
};

export default Tabs;
