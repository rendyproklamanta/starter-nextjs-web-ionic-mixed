import {
   IonContent,
   IonPage,
   IonInput,
   IonButton,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonItem,
   IonCol,
   IonRow,
   IonAlert,
   IonIcon,
   useIonRouter,
   IonLabel,
   IonFooter,
   // useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { personCircle } from "ionicons/icons";
import { useIsLoggedIn } from "../../../hooks/useAuth";
import { usePostUserLoginMutation } from "../../../store/api/authApi";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../../store/slices/authSlice";

const Login = () => {
   const router = useIonRouter();
   const [isError, setIsError] = useState(false);
   const [message, setMessage] = useState("");
   const isLoggedIn = useIsLoggedIn();
   const dispatch = useDispatch();

   useEffect(() => {
      if (isLoggedIn) {
         router.push('/tabs/home');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLoggedIn]);

   const {
      handleSubmit,
      control,
      register,
      formState: { errors }
   } = useForm({
      defaultValues: {
         username: '',
         password: '',
      }
   });

   const [userLogin] = usePostUserLoginMutation();

   const onSubmit = (data) => {
      try {
         userLogin(data).unwrap()
            .then((res) => {
               if (!res.success) {
                  setMessage(res.msg);
                  setIsError(true);
               } else {
                  dispatch(setIsLoggedIn(res));
               }
            });
      } catch (error) {
         console.log("🚀 ~ file: Login.jsx:60 ~ .then ~ error:", error);

      }
   };


   if (!isLoggedIn) {
      return (
         <IonPage>
            <IonHeader>
               <IonToolbar>
                  <IonTitle>Login</IonTitle>
               </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
               <IonAlert
                  isOpen={isError}
                  onDidDismiss={() => setIsError(false)}
                  cssClass="my-custom-class"
                  header={"Error!"}
                  message={message}
                  buttons={["Dismiss"]}
               />
               <IonRow className="ion-text-center my-5">
                  <IonCol>
                     <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle}
                     />
                  </IonCol>
               </IonRow>
               <form onSubmit={handleSubmit(onSubmit)}>
                  {/* === ION INPUT === */}
                  <IonItem className="my-3">
                     <Controller
                        name="username"
                        control={control}
                        render={() => {
                           return (
                              <IonInput
                                 label="Username"
                                 labelPlacement="floating"
                                 {...register('username', {
                                    required: 'Username is a required field',
                                 })}
                              />
                           );
                        }}
                     />
                  </IonItem>
                  <ErrorMessage
                     errors={errors}
                     name="username"
                     as={<div style={{ color: 'red' }} />}
                  />
                  {/* === ION INPUT === */}
                  <IonItem className="my-3">
                     <Controller
                        name="password"
                        control={control}
                        render={() => {
                           return (
                              <IonInput
                                 label="Password"
                                 labelPlacement="floating"
                                 type="password"
                                 {...register('password', {
                                    required: 'Password is a required field',
                                 })}
                              />
                           );
                        }}
                     />
                  </IonItem>
                  <ErrorMessage
                     errors={errors}
                     name="password"
                     as={<div style={{ color: 'red' }} />}
                  />
                  <IonRow className="ion-text-center mt-3">
                     <IonCol>
                        <IonButton expand="block" type="submit" className='my-5'>Login</IonButton>
                        <p style={{ fontSize: "medium" }}>
                           Dont have an account? <a href="#">Sign up!</a>
                        </p>
                     </IonCol>
                  </IonRow>
               </form>
            </IonContent>
            <IonFooter className="text-center py-4 ion-no-border">
               <IonButton color="light" routerLink={`/tabs/home`} detail={false}>
                  <IonLabel>{'Go To Home >>'}</IonLabel>
               </IonButton>
            </IonFooter>
         </IonPage>
      );
   }
};

export default Login;