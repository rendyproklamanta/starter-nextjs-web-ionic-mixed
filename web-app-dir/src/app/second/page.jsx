import Link from 'next/link';
import '../../styles/bootstrap.css';

async function getListData() {
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
   return res.json();
}

export async function generateMetadata() {
   const data = await getListData();

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

export default async function Second() {
   const data = await getListData();

   return (
      <>
         <Link className='container' href="/breaking">navigate to breaking</Link>
         <div>
            {data.results.map((item, i) => (
               <li key={i}>{item.name}</li>
            ))}
         </div>
      </>
   );
}