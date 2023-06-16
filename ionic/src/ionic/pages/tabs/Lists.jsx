import Store from '../../../store';
import * as selectors from '../../../store/selectors';

import {
   IonPage,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonContent,
   IonItem,
   IonLabel,
   IonList,
} from '@ionic/react';

const ListEntry = ({ list, ...props }) => ( // eslint-disable-line no-unused-vars
   <IonItem routerLink={`/tabs/lists/${list.id}`} className="list-entry">
      <IonLabel>{list.name}</IonLabel>
   </IonItem>
);

const AllLists = ({ onSelect }) => { // eslint-disable-line no-unused-vars
   const lists = Store.useState(selectors.getLists);

   return (
      <>
         {lists.map((list, i) => (
            <ListEntry list={list} key={i} />
         ))}
         <IonItem routerLink={`/login`}>
            <IonLabel>Login Page</IonLabel>
         </IonItem>
         <IonItem routerLink={`/slides`}>
            <IonLabel>Slider</IonLabel>
         </IonItem>
         <IonItem routerLink={`/chat`}>
            <IonLabel>Chat</IonLabel>
         </IonItem>
         <IonItem routerLink={`/pokemon`}>
            <IonLabel>Pokemon</IonLabel>
         </IonItem>
      </>
   );
};

const Lists = () => {
   return (
      <>
         <IonPage>
            <IonHeader translucent={true}>
               <IonToolbar>
                  <IonTitle>Lists</IonTitle>
               </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true}>
               <IonHeader collapse="condense">
                  <IonToolbar>
                     <IonTitle size="large">Lists</IonTitle>
                  </IonToolbar>
               </IonHeader>
               <IonList>
                  <AllLists />
               </IonList>
            </IonContent>
         </IonPage>
      </>
   );
};

export default Lists;
