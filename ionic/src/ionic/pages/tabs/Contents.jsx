import React, { useState } from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonButton, IonLoading, IonPopover, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonSkeletonText, IonItem, IonThumbnail, IonLabel, IonItemDivider, IonItemGroup, IonActionSheet, IonAlert, IonToast, IonImg, useIonRouter } from '@ionic/react';
import { Share } from '@capacitor/share';
import LocalNotification from '../../../components/LocalNotifications';
import { takeCamera } from '../../../utils/takeCamera';

const Contents = () => {
   const [image, setImage] = useState('');
   const router = useIonRouter();

   const handleCamera = async () => {
      const result = await takeCamera();
      if (result) {
         setImage(result);
      }
   };

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Contents Ionic / Capacitor</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent className="ion-padding">

            <IonList className='pt-0'>
               <IonItemGroup>
                  <IonItemDivider>
                     <IonLabel>
                        Button with function
                     </IonLabel>
                  </IonItemDivider>

                  <IonGrid>
                     <IonRow>
                        <IonCol size="auto">
                           <IonButton id="open-loading">Loading</IonButton>
                           <IonLoading trigger="open-loading" message="Loading..." duration={3000} />
                        </IonCol>
                        <IonCol size="auto">
                           <IonButton id="click-trigger">Popover</IonButton>
                           <IonPopover trigger="click-trigger" triggerAction="click">
                              <IonContent className="ion-padding">Hello World!</IonContent>
                              <IonContent className="ion-padding">Hello World!</IonContent>
                           </IonPopover>
                        </IonCol>
                        <IonCol size="auto">
                           <IonButton id="open-action-sheet">Sheet</IonButton>
                           <IonActionSheet
                              trigger="open-action-sheet"
                              header="Actions"
                              buttons={[
                                 {
                                    text: 'Delete',
                                    role: 'destructive',
                                    handler: () => {
                                       alert('Destructive clicked');
                                    },
                                    data: {
                                       action: 'delete'
                                    }
                                 },
                                 {
                                    text: 'Share',
                                    handler: async () => {
                                       await Share.share({
                                          title: 'See cool stuff',
                                          text: 'Really awesome thing you need to see right meow',
                                          url: 'http://ionicframework.com/',
                                          dialogTitle: 'Share with buddies',
                                       });
                                    }
                                 },
                                 {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    data: {
                                       action: 'cancel'
                                    }
                                 }
                              ]}
                           ></IonActionSheet>
                        </IonCol>
                        <IonCol size="auto">
                           <IonButton id="present-alert">Alert</IonButton>
                           <IonAlert
                              trigger="present-alert"
                              header="Alert"
                              subHeader="Important message"
                              message="This is an alert!"
                              buttons={['OK']}
                           ></IonAlert>
                        </IonCol>
                        <IonCol size="auto">
                           <IonButton id="open-toast" expand="block">Toast</IonButton>
                           <IonToast
                              trigger="open-toast"
                              message="This toast will disappear after 5 seconds"
                              duration={5000}
                              buttons={[
                                 {
                                    text: 'Dismiss',
                                    role: 'cancel',
                                 }
                              ]}
                           ></IonToast>
                        </IonCol>
                        <IonCol size="auto">
                           <IonButton onClick={handleCamera}>Camera</IonButton>
                        </IonCol>
                        <IonCol size="auto">
                           <LocalNotification />
                        </IonCol>
                        <IonCol size="auto">
                           <IonButton onClick={() => router.push('/webview', 'forward')}>Webview</IonButton>
                        </IonCol>
                     </IonRow>
                  </IonGrid>
               </IonItemGroup>

               {image && (
                  <>
                     Image result :
                     <IonImg src={image} alt="img-plc"></IonImg>
                  </>
               )}

               <IonItemGroup>
                  <IonItemDivider>
                     <IonLabel>
                        Skeleton
                     </IonLabel>
                  </IonItemDivider>

                  <IonListHeader>
                     <IonSkeletonText animated={true} style={{ 'width': '80px' }}></IonSkeletonText>
                  </IonListHeader>
                  <IonItem>
                     <IonThumbnail slot="start">
                        <IonSkeletonText animated={true}></IonSkeletonText>
                     </IonThumbnail>
                     <IonLabel>
                        <h3>
                           <IonSkeletonText animated={true} style={{ 'width': '80%' }}></IonSkeletonText>
                        </h3>
                        <p>
                           <IonSkeletonText animated={true} style={{ 'width': '60%' }}></IonSkeletonText>
                        </p>
                        <p>
                           <IonSkeletonText animated={true} style={{ 'width': '30%' }}></IonSkeletonText>
                        </p>
                     </IonLabel>
                  </IonItem>
               </IonItemGroup>
            </IonList>


         </IonContent >
      </IonPage >
   );
};

export default Contents;