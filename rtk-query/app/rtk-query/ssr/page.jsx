import React from 'react';
import Link from 'next/link';
import { getPokemons } from '@/src/services/users';

export async function generateMetadata({ searchParams }) {
   const data = await getPokemons({ searchParams });

   return {
      title: data.results[0].name,
      description: 'Second Page',
      twitter: {
         card: 'summary_large_image',
         title: 'Second page twitter',
         description: 'The React Framework for the Web',
         siteId: '1467726470533754880',
         creator: '@nextjs',
         creatorId: '1467726470533754880',
         images: ['https://nextjs.org/og.png'],
      },
   };
}

const Ssr = async ({ searchParams }) => {
   const data = await getPokemons({ searchParams });

   return (
      <div>
         <br />
         <h3>Pokemon SSR</h3>
         <br />
         <ul>
            {data && data.results.map((item, i) => (
               <li key={i}>{item.name}</li>
            ))}
         </ul>
         <Link href={`/second/ssr?offset=${+searchParams.offset - 10}`}>
            Prev
         </Link>
         &nbsp;
         <Link href={`/second/ssr?offset=${+searchParams.offset + 10}`}>
            Next
         </Link>
      </div >
   );
};

export default Ssr;