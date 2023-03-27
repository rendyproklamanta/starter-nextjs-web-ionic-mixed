import Link from 'next/link';
import '../styles/globals.css';

export const metadata = {
   title: 'Home',
   description: 'Welcome to Next.js',
 };

export default function Page() {

   return (
      <>
         <h1>Hello, Next.js!</h1>
         <Link className='container' href="/second">second page</Link>
         <Link className='container' href="/breaking">breaking page</Link>
      </>
   );

}