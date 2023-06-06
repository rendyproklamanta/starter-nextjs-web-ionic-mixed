import { IonButton, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonInput, IonPage, IonRouterLink, IonRow } from '@ionic/react';
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
                     <div className='mb-5'>
                        <IonInput
                           type="email"
                           fill="solid"
                           label="Email"
                           labelPlacement="floating"
                           errorText="Invalid email"
                        ></IonInput>
                     </div>
                     <div>
                        <IonInput
                           type="email"
                           fill="solid"
                           label="Email"
                           labelPlacement="floating"
                           errorText="Invalid email"
                        ></IonInput>
                     </div>
                     <IonRouterLink routerLink="/tabs/home">
                        <IonButton className="h-[50px] mt-5" expand="block">Login</IonButton>
                     </IonRouterLink>
                  </IonCol>
               </IonRow>
            </IonGrid>
         </IonContent>

         <IonFooter>
            <IonGrid className="ion-no-padding pt-5">
               <Action message="Don't have an account?" text="Sign up" link="/signup" className="animate__animated animate__fadeIn animate__delay-1s" />
               <Wave />
            </IonGrid>
         </IonFooter>
      </IonPage>
   );
};

export default Login;