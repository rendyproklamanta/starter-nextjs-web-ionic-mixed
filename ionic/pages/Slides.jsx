import React from 'react';
import { IonSlides, IonSlide, IonContent, IonPage } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
   initialSlide: 1,
   speed: 400
};

const Slides = () => (
   <IonPage>
      <IonContent>
         <IonSlides pager={true} options={slideOpts} style={{ height: '100%' }}>
            <IonSlide>
               <h1>Slide 1</h1>
            </IonSlide>
            <IonSlide>
               <h1>Slide 2</h1>
            </IonSlide>
            <IonSlide>
               <h1>Slide 3</h1>
            </IonSlide>
         </IonSlides>
      </IonContent>
   </IonPage>

);

export default Slides;
