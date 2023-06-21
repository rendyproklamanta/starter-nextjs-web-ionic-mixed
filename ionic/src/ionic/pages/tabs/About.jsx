import React, { useState } from "react";
import {
   IonHeader,
   IonToolbar,
   IonContent,
   IonPage,
   IonButtons,
   IonMenuButton,
   IonDatetime,
   IonSelectOption,
   IonList,
   IonItem,
   IonLabel,
   IonSelect,
   IonPopover,
   IonTitle,
} from "@ionic/react";

const About = () => {
   const [location, setLocation] = useState("madison");
   const [conferenceDate, setConferenceDate] = useState(
      "2047-05-17T00:00:00-05:00"
   );

   const selectOptions = {
      header: "Select a Location"
   };

   return (
      <IonPage id="about-page">
         <IonHeader translucent={true}>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonMenuButton></IonMenuButton>
               </IonButtons>
               <IonTitle>About</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <div className="about-info">
               <h3 className="ion-padding-top ion-padding-start">About</h3>

               <p className="ion-padding-start ion-padding-end">
                  The Ionic Conference is a one-day conference on{' '}
                  featuring talks from
                  the Ionic team. It is focused on Ionic applications being built with
                  Ionic Framework. This includes migrating apps to the latest version
                  of the framework, Angular concepts, Webpack, Sass, and many other
                  technologies used in Ionic 2. Tickets are completely sold out, and
                  we’re expecting more than 1000 developers – making this the largest
                  Ionic conference ever!
               </p>

               <h3 className="ion-padding-top ion-padding-start">Details</h3>

               <IonList lines="none">
                  <IonItem>
                     <IonSelect
                        label="Location"
                        value={location}
                        interfaceOptions={selectOptions}
                        onIonChange={e => setLocation(e.detail.value)}
                     >
                        <IonSelectOption value="madison">Madison, WI</IonSelectOption>
                        <IonSelectOption value="austin">Austin, TX</IonSelectOption>
                        <IonSelectOption value="chicago">Chicago, IL</IonSelectOption>
                        <IonSelectOption value="seattle">Seattle, WA</IonSelectOption>
                     </IonSelect>
                  </IonItem>
                  <IonItem button={true} id="open-date-input">
                     <IonLabel>Date</IonLabel>
                     <IonPopover
                        id="date-input-popover"
                        trigger="open-date-input"
                        showBackdrop={false}
                        side="top"
                        alignment="end"
                     >
                        <IonDatetime
                           max="2056"
                           value={conferenceDate}
                           onIonChange={e => setConferenceDate(e.detail.value)}
                           presentation="date"
                        ></IonDatetime>
                     </IonPopover>
                  </IonItem>
               </IonList>

               <h3 className="ion-padding-top ion-padding-start">Internet</h3>

               <IonList lines="none">
                  <IonItem>
                     <IonLabel>Wifi network</IonLabel>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Password</IonLabel>
                     <IonLabel className="ion-text-end">makegoodthings</IonLabel>
                  </IonItem>
               </IonList>
            </div>
         </IonContent>
      </IonPage>
   );
};

export default React.memo(About);
