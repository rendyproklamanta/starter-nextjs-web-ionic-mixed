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

import { IonApp, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import Routes from './Routes';

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
         <Routes />
      </IonApp>
   );
};

export default Ionic;
