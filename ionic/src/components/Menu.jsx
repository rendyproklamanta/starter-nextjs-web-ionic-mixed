import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, } from '@ionic/react';
import { calendarOutline, help, informationCircleOutline, logIn, logOut, mapOutline, peopleOutline, person, personAdd } from 'ionicons/icons';
import React from 'react';
import { useLocation } from 'react-router';

const routes = {
   appPages: [
      { title: 'Home', path: '/tabs/home', icon: calendarOutline },
      { title: 'List', path: '/tabs/lists', icon: peopleOutline },
      { title: 'Setting', path: '/tabs/settings', icon: mapOutline },
      { title: 'About', path: '/tabs/about', icon: informationCircleOutline },
   ],
   loggedInPages: [
      { title: 'Account', path: '/account', icon: person },
      { title: 'Support', path: '/support', icon: help },
      { title: 'Logout', path: '/logout', icon: logOut },
   ],
   loggedOutPages: [
      { title: 'Login', path: '/login', icon: logIn },
      { title: 'Support', path: '/support', icon: help },
      { title: 'Signup', path: '/signup', icon: personAdd },
   ],
};

const Menu = () => {
   const location = useLocation();

   return (
      <IonMenu type="overlay" contentId="main">
         <IonContent forceOverscroll={false}>
            <IonList lines="none">
               <IonListHeader>Conference</IonListHeader>

               {routes.appPages.map((res, i) => (
                  <IonMenuToggle key={i} auto-hide="false">
                     <IonItem
                        detail={false}
                        routerLink={res.path}
                        routerDirection="none"
                        className={
                           location.pathname.startsWith(res.path) ? 'selected' : undefined
                        }
                     >
                        <IonIcon slot="start" icon={res.icon} />
                        <IonLabel>{res.title}</IonLabel>
                     </IonItem>
                  </IonMenuToggle>
               ))}

            </IonList>
         </IonContent>
      </IonMenu>
   );
};

export default Menu;