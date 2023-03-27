'use client';

import { NextSeo } from 'next-seo';
import '../../styles/globals.css';
import styles from './breaking.module.css';

export default function Breaking() {
   const updateMeta = {
      title: 'Breaking',
      description: 'Breaking page',
   };

   return (
      <>
         <NextSeo {...updateMeta} useAppDir={true} />
         <div className={styles.component}>
            <div className='container'>BREAKING</div>
            <div>
               <button onClick={(e) => console.log(e.b.c)}>
                  break this
               </button>
            </div>
         </div>
      </>

   );
}