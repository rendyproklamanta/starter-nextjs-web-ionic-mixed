import dynamic from 'next/dynamic';

const Ionic = dynamic(() => import('../ionic'), {
   ssr: false,
});

export default function index() {
   return <Ionic />;
}
