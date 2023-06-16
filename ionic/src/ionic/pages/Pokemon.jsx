import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';
import { useGetPokemonListQuery } from '../../store/api/pokemonApi';

const Pokemon = () => {
   const result = useGetPokemonListQuery({ offset: 1, limit: 10 });
   // console.log("🚀 ~ file: Pokemon.jsx:7 ~ Pokemon ~ result:", result)
   let { isLoading, data } = result;

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton />
               </IonButtons>
               <IonTitle>Pokemon List</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent className="ion-padding">
            <ul>
               {!isLoading && data.results.map((res, i) => (
                  <li key={i}>{res.name}</li>
               ))}
            </ul>
         </IonContent>
      </IonPage>
   );
};

export default Pokemon;