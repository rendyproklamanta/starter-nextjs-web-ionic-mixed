import Layout from '../layouts/Layout';
import { isCapacitor } from '../constants';
import 'animate.css';

const capacitor = isCapacitor;

if (capacitor) {
   require('tailwindcss/tailwind.css');
   require('../styles/global.css');
   require('../styles/variables.css');
} else {
   require('../styles/theme.bs.css');
}

function MyApp({ Component, pageProps }) {
   
   if (capacitor) {
      return (
         <Component {...pageProps} />
      );
   } else {
      return (
         <>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </>
      );
   }


}

export default MyApp;
