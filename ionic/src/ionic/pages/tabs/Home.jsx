import Card from '../../ui/Card';

import {
   IonPage,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonButtons,
   IonButton,
   IonIcon,
   IonContent,
   IonMenuButton,
   IonMenu,
   IonImg,
   IonCard,
   IonAvatar,
} from '@ionic/react';
import Notifications from '../Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../../store/selectors';
import Store from '../../../store';

const FeedCard = ({ title, type, text, author, authorAvatar, image }) => (
   <Card className="mb-5 mx-auto">
      <IonCard className='m-0 rounded-t-xl '>
         <IonImg className="h-[200px] object-cover" src={image} alt="" />
      </IonCard>
      <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-slate-800">
         <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
         <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
         <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
         <div className="flex items-center">
            <IonAvatar className="flex items-center -mr-2">
               <IonImg src={authorAvatar} className="h-10 w-10 relative object-cover" alt="" fill />
            </IonAvatar>
            <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
         </div>
      </div>
   </Card>
);

const Home = () => {
   const homeItems = Store.useState(getHomeItems);
   const [showNotifications, setShowNotifications] = useState(false);

   return (
      <>
         <IonMenu contentId="main-content">
            <IonHeader>
               <IonToolbar>
                  <IonTitle>Menu Content</IonTitle>
               </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">This is the menu content.</IonContent>
         </IonMenu>
         <IonPage id="main-content">
            <IonHeader>
               <IonToolbar>
                  <IonButtons slot="start">
                     <IonMenuButton></IonMenuButton>
                  </IonButtons>
                  <IonTitle>Feed</IonTitle>

                  <IonButtons slot="end">
                     <IonButton onClick={() => setShowNotifications(true)}>
                        <IonIcon icon={notificationsOutline} />
                     </IonButton>
                  </IonButtons>
               </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen scrollEvents={true}>
               <IonHeader collapse="condense">
                  <IonToolbar>
                     <IonTitle size="large">Feed</IonTitle>
                  </IonToolbar>
               </IonHeader>
               <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
               {homeItems.map((i, index) => (
                  <FeedCard {...i} key={index} />
               ))}
            </IonContent>
         </IonPage>
      </>
   );
};

export default Home;
