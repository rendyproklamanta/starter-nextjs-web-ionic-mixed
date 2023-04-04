import { LocalNotifications } from '@capacitor/local-notifications';
// import { confirmAlert } from "react-confirm-alert";
import { Capacitor } from "@capacitor/core";
import { IonButton, useIonAlert } from '@ionic/react';


const LocalNotification = () => {
   const [presentAlert] = useIonAlert();

   const showLocalNotification = async () => {

      try {
         const permission = await LocalNotifications.requestPermissions();
         const id = new Date().getTime();

         if (permission.display == 'granted') {

            // register action on capacitor
            if (Capacitor.getPlatform() !== 'web') {
               await LocalNotifications.registerActionTypes({
                  types: [
                     {
                        id: 'CHAT_ACTION',
                        actions: [
                           {
                              id: "view",
                              title: 'Open Chat'
                           },
                           {
                              id: "remove",
                              title: 'Dismiss',
                              destructive: true
                           }
                        ]
                     }
                  ]
               });
            }

            await LocalNotifications.schedule({
               notifications: [
                  {
                     title: "Title",
                     smallIcon: 'logo',
                     largeIcon: 'splash',
                     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi delectus molestias, blanditiis,",
                     // largeBody: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, eaque fuga aliquam ratione rem excepturi accusantium voluptatibus, commodi fugiat, porro pariatur quisquam veritatis totam sunt modi sequi cum debitis assumenda?",
                     id: id,
                     channelId: 'pop-notifications',
                     sound: true,
                     attachments: [{ id: id, url: 'res://assets/img/splash.png', options: {} }],
                     // actionTypeId: "CHAT_ACTION",
                  }
               ]
            });
            //console.log(res);
         } else {
            presentAlert({
               header: 'Error!',
               subHeader: 'You dont have permission',
               buttons: ['OK'],
            });
         }

      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <IonButton onClick={showLocalNotification}>Local Notification</IonButton>
   );
};

export default LocalNotification;