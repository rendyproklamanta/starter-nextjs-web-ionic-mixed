import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';

const Webview = () => {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton defaultHref="/tabs/home" />
               </IonButtons>
               <IonTitle>Webview</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <iframe src="http://member.growcoconut.com.localhost/dashboard" width="100%" height="110%" style={{ marginTop: '-15%' }}></iframe>
         </IonContent>
      </IonPage >
   );
};

export default Webview;