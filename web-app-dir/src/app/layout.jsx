// import { NextSeo } from 'next-seo';
import Link from 'next/link';
import styles from './layout.module.css';
import { Metadata } from '../configs/metadata';

export const metadata = Metadata;

export default function RootLayout({ children }) {

   return (
      <html lang="en">
         <head>
            {/* <NextSeo
               {...metadata}
               useAppDir={true}
               facebook={{ appId: '1234567890' }}
               themeColor="#73fa97"
               titleTemplate="%s | Next SEO"
            /> */}
         </head>
         <body>
            <div className={styles.header}>
               <Link className='container' href="/">This is root layout</Link>
            </div>
            <div>
               {children}
            </div>
         </body>
      </html>
   );
}