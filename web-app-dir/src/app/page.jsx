import Link from 'next/link';
import '../styles/globals.css';
import Counter from '../components/Counter';

export const metadata = {
   title: 'Home',
   description: 'Welcome to Next.js',
};

export default function Page() {

   return (
      <>
         <h1>Hello, Next.js!</h1>
         <Counter />
         <Link className='container' href="/second">second page</Link>
         <br />
         <Link className='container' href="/breaking">breaking page</Link>
      </>
   );

}