import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import React from 'react';

const Menu = () => {
   return (
      <IonMenu contentId="main-content" autoHide={false}>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Menu</IonTitle>
            </IonToolbar>
         </IonHeader>

         <IonContent>
            <IonMenuToggle>
               <IonItem routerLink={`/tabs/lists`}>
                  <IonLabel>Menu 1</IonLabel>
                  <IonIcon icon={chevronForward} slot="end"></IonIcon>
               </IonItem>
               <IonItem routerLink={`/tabs/settings`}>
                  <IonLabel>Menu 2</IonLabel>
                  <IonIcon icon={chevronForward} slot="end"></IonIcon>
               </IonItem>
            </IonMenuToggle>
         </IonContent>
      </IonMenu>
   );
};

export default Menu;