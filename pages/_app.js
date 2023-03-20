import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import Layout from '../layouts/Layout';
import { isCapacitor } from '../constants';

import 'animate.css';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import '../styles/variables.css';

const capacitor = isCapacitor;

function MyApp({ Component, pageProps }) {
  
   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0, viewport-fit=cover"
            ></meta>
         </Head>

         {capacitor ? <Component {...pageProps} /> : 
            <Layout>
               <Component {...pageProps} />
            </Layout>
         }

      </>
   );
}

export default MyApp;
