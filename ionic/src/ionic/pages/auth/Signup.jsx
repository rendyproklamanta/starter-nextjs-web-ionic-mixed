import { IonBackButton, IonButton, IonButtons, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonLabel, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { Wave } from '../../../components/Wave';
import { arrowBack } from "ionicons/icons";

const Signup = () => {
   return (
      <IonPage>

         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton icon={arrowBack} text="" className="custom-back" />
               </IonButtons>
            </IonToolbar>
         </IonHeader>

         <IonContent fullscreen>
            <IonGrid className="ion-padding">
               <IonRow >
                  <IonCol size="12">
                     <IonCardTitle>Signup</IonCardTitle>
                     <h5>Welcome back, hope youre doing well</h5>
                  </IonCol>
               </IonRow>
               <IonRow className="ion-margin-top ion-padding-top">
                  <IonCol size="12">
                     <div>
                        <IonLabel>
                           Username
                        </IonLabel>
                        <IonInput id="name" label="Name" required='true' style={{ background: '#2c2c2c', borderRadius: '10px', margin: '20px 0', padding: '7px 20px ' }} />
                     </div>
                     <div>
                        <IonLabel>
                           Password
                        </IonLabel>
                        <IonInput id="name" label="Name" required='true' style={{ background: '#2c2c2c', borderRadius: '10px', margin: '20px 0', padding: '7px 20px ' }} />
                     </div>
                     <IonButton className="custom-button h-50 mt-10 animate__animated animate__fadeIn animate__delay-1s" expand="block">Signup Now</IonButton>
                  </IonCol>
               </IonRow>
            </IonGrid>
         </IonContent>

         <IonFooter>
            <IonGrid className="ion-no-margin ion-no-padding">
               <Wave />
            </IonGrid>
         </IonFooter>
      </IonPage>
   );
};

export default Signup;