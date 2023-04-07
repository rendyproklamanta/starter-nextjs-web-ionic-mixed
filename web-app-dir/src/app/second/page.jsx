import Link from 'next/link';
import '../../styles/bootstrap.css';

export const metadata = {
   title: 'Second',
   description: 'Welcome to Next.js',
};

export default function Second() {


   return (
      <>
         <Link href="/breaking">navigate to breaking</Link>
         <br />
         <Link href="/second/ssr">navigate to SSR</Link>
         <br />
         <Link href="/second/csr">navigate to CSR</Link>
      </>
   );
}