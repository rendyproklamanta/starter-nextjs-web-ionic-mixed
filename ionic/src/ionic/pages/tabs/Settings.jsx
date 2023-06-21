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
   IonButtons,
   IonMenuButton,
   IonButton,
   IonIcon,
} from '@ionic/react';

import Store from '../../../store';
import * as selectors from '../../../store/selectors';
import { setSettings } from '../../../store/actions';
import { logOutOutline } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { setIsLoggedOut } from '../../../store/slices/authSlice';

const Settings = () => {
   const settings = Store.useState(selectors.getSettings);
   const router = useIonRouter();
   const dispatch = useDispatch();

   // if (!session?.user) {
   //    router.push('/login', 'forward', 'push');
   //    return;
   // }

   const signOut = () => {
      dispatch(setIsLoggedOut());
      router.push('/login');
   };

   return (
      <>
         <IonPage>
            <IonHeader>
               <IonToolbar>
                  <IonButtons slot="start">
                     <IonMenuButton></IonMenuButton>
                  </IonButtons>
                  <IonTitle>Settings</IonTitle>
                  <IonButtons slot="end">
                     <IonButton onClick={() => signOut()}>
                        <IonIcon icon={logOutOutline} />
                     </IonButton>
                  </IonButtons>
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
                     <IonLabel onClick={() => router.push('/pagetwo', 'forward')}>Goto page 2 [ Router ]</IonLabel>
                  </IonItem>
               </IonList>
            </IonContent>
         </IonPage>
      </>
   );
};

export default Settings;
