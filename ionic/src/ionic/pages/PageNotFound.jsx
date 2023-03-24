import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const PageNotFound = () => {
   return (
      <>
         <IonPage>
            <IonHeader>
               <IonToolbar>
                  <IonTitle>Not Found</IonTitle>
               </IonToolbar>
            </IonHeader>
            <IonContent className='text-center'>
               <Image src="/img/error-404.png" width={300} height={300} alt="image" className="img-fluid position-relative rounded-5 shadow mx-auto mt-5" />
               <Link href="/" className="btn btn-xl btn-light mt-5">{'<< '}Back home</Link>
            </IonContent>
         </IonPage>
      </>
   );
};

export default PageNotFound;