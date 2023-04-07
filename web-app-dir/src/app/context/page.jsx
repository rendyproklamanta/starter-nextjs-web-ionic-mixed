'use client';

import Link from 'next/link';
import { useGlobalContext } from '../../contexts/global';

export const metadata = {
   title: 'Home',
   description: 'Welcome to Next.js',
};

export default function Page() {
   const { color, setColor } = useGlobalContext();

   return (
      <>
         <h1>Hello, Next.js!</h1>
         <p>Current color: {color}</p>
         <button onClick={() => setColor('blue')}>Set color to blue</button>
         <br /><br />

         <Link className='container' href="/second">second page</Link>
         <Link className='container' href="/breaking">breaking page</Link>
      </>
   );

}