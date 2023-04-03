import { IonButton, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonInput, IonLabel, IonPage, IonRouterLink, IonRow } from '@ionic/react';
import { Action } from '../../../components/Action';
import { Wave } from '../../../components/Wave';

const Login = () => {
   return (
      <IonPage>
         <IonContent fullscreen>
            <IonGrid className="ion-padding">
               <IonRow >
                  <IonCol size="12">
                     <IonCardTitle>Log in</IonCardTitle>
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
                     <IonRouterLink className="custom-link" routerLink="/">
                        <IonButton className="custom-button h-50 mt-10 animate__animated animate__fadeIn animate__delay-1s" expand="block">Login</IonButton>
                     </IonRouterLink>
                  </IonCol>
               </IonRow>
            </IonGrid>
         </IonContent>

         <IonFooter>
            <IonGrid className="ion-no-margin ion-no-padding">
               <Action message="Don't have an account?" text="Sign up" link="/signup" />
               <Wave />
            </IonGrid>
         </IonFooter>
      </IonPage>
   );
};

export default Login;