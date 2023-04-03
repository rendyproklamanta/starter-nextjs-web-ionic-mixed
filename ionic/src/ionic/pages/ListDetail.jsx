import {
   IonBackButton,
   IonButtons,
   IonCheckbox,
   IonContent,
   IonHeader,
   IonItem,
   IonList,
   IonPage,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';

import Store from '../../store';
import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';

const ListItems = ({ list }) => {
   return (
      <IonList>
         {(list?.items || []).map((item, key) => (
            <ListItemEntry list={list} item={item} key={key} />
         ))}
      </IonList>
   );
};

const ListItemEntry = ({ list, item }) => (
   <IonItem onClick={() => actions.setDone(list, item, !item.done)}>
      <IonCheckbox aria-label={item.name} checked={item.done || false}  >
         {item.name}
      </IonCheckbox>
   </IonItem>
);

const ListDetail = ({ match }) => { // eslint-disable-line no-unused-vars
   const lists = Store.useState(selectors.getLists);
   const params = useParams();
   const { listId } = params;
   const loadedList = lists.find(l => l.id === listId);

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton defaultHref="/tabs/lists" />
               </IonButtons>
               <IonTitle>{loadedList.name}</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <ListItems list={loadedList} />
         </IonContent>
      </IonPage>
   );
};

export default ListDetail;
