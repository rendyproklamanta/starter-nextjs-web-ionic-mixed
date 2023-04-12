'use client';

import { getPokemons } from '@/src/services/users';
import { useQuery } from '@tanstack/react-query';
import ListUsers from '.';
import { useState } from 'react';

export default function ListUsersCsr() {

   // This query was not prefetched on the server and will not start
   // fetching until on the client, both patterns are fine to mix
   const [page, setPage] = useState(1);

   const result = useQuery({
      queryKey: ["hydrate-poke", page],
      queryFn: () => getPokemons({ offset: page, limit: 8 }),
   });

   return (
      <>
         <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pb-28">
            <div className="container">
               <ListUsers result={result} />
               <br />
               <center>
                  <button onClick={() => setPage((prev) => prev - 10)}>
                     {'<<'} Prev
                  </button>
                  &nbsp; | &nbsp;
                  <button onClick={() => setPage((prev) => prev + 10)}>
                     Next {'>>'}
                  </button>
               </center>
            </div>
         </section>
      </>
   );

}