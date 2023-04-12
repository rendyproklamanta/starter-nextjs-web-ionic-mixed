'use client';

import { getPokemons, getUsers } from '@/src/services/users';
import { useQuery } from '@tanstack/react-query';
import ListUsers from '.';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ListUsersSsr(props) {

   const router = useRouter();
   const searchParams = useSearchParams();
   const page = searchParams.get('page');

   const result = useQuery({
      queryKey: ["hydrate-poke", page],
      queryFn: () => getPokemons({ offset: page, limit: 8 }),
      initialData: props.users,
   });

   const handlePage = (page) => {
      let params;
      if (page === 'next') {
         params = props.users.next;
      } else {
         params = props.users.previous;
      }
      const urlParams = new URL(params).searchParams;
      const offset = urlParams.get('offset');
      router.push('reactquery/ssr?page=' + offset);
   };

   return (
      <>
         <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pb-28">
            <div className="container">
               <ListUsers result={result} />
               <br />
               <center>
                  <button onClick={() => handlePage('previous')}>
                     {'<<'} Prev
                  </button>
                  &nbsp; | &nbsp;
                  <button onClick={() => handlePage('next')}>
                     Next {'>>'}
                  </button>
               </center>
            </div>
         </section>
      </>
   );

}