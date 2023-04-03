import {
   IonPage,
   IonHeader,
   IonItem,
   IonToolbar,
   IonTitle,
   IonContent,
   IonToggle,
   IonLabel,
   useIonRouter,
   IonList,
} from '@ionic/react';

import Store from '../../../store';
import * as selectors from '../../../store/selectors';
import { setSettings } from '../../../store/actions';

const Settings = () => {
   const settings = Store.useState(selectors.getSettings);
   const router = useIonRouter();

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Settings</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <IonList>
               <IonItem>
                  <IonToggle
                     aria-label="Primary toggle"
                     checked={settings.enableNotifications}
                     onIonChange={e => {
                        setSettings({
                           ...settings,
                           enableNotifications: e.target.checked,
                        });
                     }}
                  >
                     Enable Notifications
                  </IonToggle>
               </IonItem>
               <IonItem>
                  <IonLabel onClick={() => router.push('/pagetwo', 'forward')}>Goto page 2</IonLabel>
               </IonItem>
            </IonList>
         </IonContent>
      </IonPage>
   );
};

export default Settings;
