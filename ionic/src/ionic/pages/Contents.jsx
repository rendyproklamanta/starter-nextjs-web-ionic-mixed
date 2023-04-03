import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonButton, IonLoading, IonPopover, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonSkeletonText, IonItem, IonThumbnail, IonLabel, IonItemDivider, IonItemGroup } from '@ionic/react';

const Contents = () => {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton defaultHref="/tabs/settings" />
               </IonButtons>
               <IonTitle>Back Button</IonTitle>
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
                              <IonContent class="ion-padding">Hello World!</IonContent>
                              <IonContent class="ion-padding">Hello World!</IonContent>
                           </IonPopover>
                        </IonCol>
                        <IonCol size="auto">
                           <IonButton id="click-trigger">Popover</IonButton>
                           <IonPopover trigger="click-trigger" triggerAction="click">
                              <IonContent class="ion-padding">Hello World!</IonContent>
                              <IonContent class="ion-padding">Hello World!</IonContent>
                           </IonPopover>
                        </IonCol>
                     </IonRow>
                  </IonGrid>
               </IonItemGroup>

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


         </IonContent>
      </IonPage>
   );
};

export default Contents;