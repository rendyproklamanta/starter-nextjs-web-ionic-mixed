import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import { Autoplay, Pagination } from 'swiper';


const Slides = () => (
   <IonPage>
      <IonContent>
         <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={true}
            pagination={true}
            loop={true}
            className='h-full'
         >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
         </Swiper>
      </IonContent>
   </IonPage>

);

export default Slides;
