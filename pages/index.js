import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';
import Home from './home';
import { isCapacitor } from '../constants';

const Ionic = dynamic(() => import('../ionic'), {
  ssr: false,
});

export default function Index() {
   const capacitor = isCapacitor;

   if (capacitor) {
      return <Ionic />;
   } else {
      return <Home />;
   }
}