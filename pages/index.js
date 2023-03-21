import dynamic from 'next/dynamic';
import { isCapacitor } from '../constants';
import Home from './home';

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
