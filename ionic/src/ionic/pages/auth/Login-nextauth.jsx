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
} from "@ionic/react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { personCircle } from "ionicons/icons";
import { signIn, useSession } from 'next-auth/react';
import Router from "next/router";

const Login = () => {
   const [isError, setIsError] = useState(false);
   const [message, setMessage] = useState("");
   const { data: session } = useSession();

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

   const onSubmit = async (data) => {
      const res = await signIn('credentials',
         {
            ...data,
            redirect: false,
         });

      if (res?.error) {
         setIsError(true);
         setMessage(res?.error);
      }
   };

   if (session?.user) {
      Router.push('refresh', '/tabs/home');
      return;
   }

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
      </IonPage>
   );
};

export default Login;