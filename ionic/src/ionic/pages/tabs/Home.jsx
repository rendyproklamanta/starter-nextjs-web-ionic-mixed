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
   IonImg,
   IonAvatar,
   IonItem,
   IonLabel,
   IonText,
   IonBadge,
   IonGrid,
   IonRow,
   IonCol,
   IonCard,
} from '@ionic/react';
import Notifications from '../Notifications';
import { useEffect, useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../../store/selectors';
import Store from '../../../store';
import Image from 'next/image';
// import { useSession } from 'next-auth/react';
// import { useIsLoggedIn } from '../../../hooks/useAuth';
import { useGetUserInfo } from '../../../hooks/useAuth';

const FeedCard = ({ title, type, text, author, authorAvatar, image }) => (
   <Card className="mb-5 mx-auto">
      <div className='rounded-t-xl overflow-hidden'>
         <IonImg className="h-[200px] object-cover" src={image} alt="" />
      </div>
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
   // const { data: session } = useSession();
   const [user, setUser] = useState('');
   const { data: userInfo, isLoading } = useGetUserInfo();
   // console.log("🚀 ~ file: Home.jsx:64 ~ Home ~ result:", isError);

   useEffect(() => {
      if (userInfo?.id) {
         setUser(userInfo);
      }
   }, [isLoading, userInfo]);


   return (
      <>
         <IonPage>
            <IonHeader>
               <IonToolbar>
                  <IonButtons slot="start">
                     <IonMenuButton></IonMenuButton>
                  </IonButtons>
                  <IonTitle>Home</IonTitle>

                  <IonButtons slot="end">
                     <IonButton onClick={() => setShowNotifications(true)}>
                        <IonIcon icon={notificationsOutline} />
                     </IonButton>
                  </IonButtons>
               </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding" fullscreen>
               <IonHeader collapse="condense">
                  <IonToolbar>
                     <IonTitle size="large">Feed</IonTitle>
                  </IonToolbar>
               </IonHeader>

               {user?.id && (
                  <IonText className='text-center' >
                     <h4 className='mt-1 font-bold'>You are Logged In! </h4>
                     <h5 className='mt-0 mb-5'>Welcome {userInfo.name} </h5>
                  </IonText>
               )}

               <IonItem routerLink='/chat/message' className="list-entry max-w-xl mx-auto mb-3 rounded-xl">
                  <IonAvatar slot="start">
                     <Image fill alt="img-plc" className="absolute -top-2 -left-8 w-24 h-24 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
                  </IonAvatar>
                  <IonLabel className='my-4 ml-4'>
                     <IonText>
                        <h3>Kathryn Murphy</h3>
                     </IonText>
                     <IonText color="medium">
                        <p className='text-xs mt-1'>Hey! there Im here...</p>
                     </IonText>
                  </IonLabel>
                  <IonLabel slot="end" className='flex flex-col items-center'>
                     <IonText color="medium">
                        <div className="text-xs">12:20 PM</div>
                     </IonText>
                     <IonBadge color="primary" className='rounded-full text-[10px] mt-1'>22</IonBadge>
                  </IonLabel>
               </IonItem>

               <IonGrid className="max-w-xl mx-auto mb-5">
                  <IonText>
                     <h6 className='font-bold'>Menu</h6>
                  </IonText>
                  <IonRow className='-ml-3 -mr-3'>
                     <IonCol size="3" size-sm="2" className='flex flex-col justify-center'>
                        <IonCard className='m-1 p-3 rounded-xl'>
                           <IonImg alt="placeholder" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" />
                        </IonCard>
                        <IonText >
                           <p className='text-center mt-1 text-xs font-thin'>
                              Lorem
                           </p>
                        </IonText>
                     </IonCol>
                     <IonCol size="3" size-sm="2" className='flex flex-col justify-center'>
                        <IonCard className='m-1 p-3 rounded-xl'>
                           <IonImg alt="placeholder" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" />
                        </IonCard>
                        <IonText >
                           <p className='text-center mt-1 text-xs font-thin'>
                              Lorem
                           </p>
                        </IonText>
                     </IonCol>
                     <IonCol size="3" size-sm="2" className='flex flex-col justify-center'>
                        <IonCard className='m-1 p-3 rounded-xl'>
                           <IonImg alt="placeholder" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
                        </IonCard>
                        <IonText >
                           <p className='text-center mt-1 text-xs font-thin'>
                              Lorem
                           </p>
                        </IonText>
                     </IonCol>
                     <IonCol size="3" size-sm="2" className='flex flex-col justify-center'>
                        <IonCard className='m-1 p-3 rounded-xl'>
                           <IonImg alt="placeholder" src="https://cdn-icons-png.flaticon.com/512/4379/4379862.png" />
                        </IonCard>
                        <IonText >
                           <p className='text-center mt-1 text-xs font-thin'>
                              Lorem
                           </p>
                        </IonText>
                     </IonCol>
                     <IonCol size="3" size-sm="2" className='flex flex-col justify-center'>
                        <IonCard className='m-1 p-3 rounded-xl'>
                           <IonImg alt="placeholder" src="https://cdn-icons-png.flaticon.com/512/717/717392.png" />
                        </IonCard>
                        <IonText >
                           <p className='text-center mt-1 text-xs font-thin'>
                              Lorem
                           </p>
                        </IonText>
                     </IonCol>
                  </IonRow>
               </IonGrid>

               {/* <div className="mb-5 overflow-hidden relative max-w-xl mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center  dark:bg-slate-800 dark:highlight-white/5">
                  <Image fill alt="img-plc" className="absolute -top-1 -left-6 w-24 h-24 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
                  <div className="flex flex-col py-5 pl-24">
                     <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">Andrew Alfred</strong>
                     <span className="text-slate-500 text-sm font-medium dark:text-slate-400">Technical advisor</span>
                  </div>
               </div> */}

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
