'use client';

import { getPokemons } from '@/src/services/general';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Reactquery from '.';
import { useEffect, useState } from 'react';

const SsrWrapper = (props) => {
   const router = useRouter();
   const [page, setPage] = useState(props.page);

   const result = useQuery({
      queryKey: ["pokemons", props.page],
      queryFn: () => getPokemons({ offset: props.page, limit: props.limit }),
      initialData: props.data,
   });

   useEffect(() => {
      if (page < 1) setPage(1);
      router.push('reactquery/ssr?page=' + page);
   }, [page, router]);


   // const handlePage = (page) => {
   //    let params;
   //    if (page === 'next') {
   //       params = props.data.next;
   //    } else {
   //       params = props.data.previous;
   //    }
   //    const urlParams = new URL(params).searchParams;
   //    const offset = urlParams.get('offset');
   //    router.push('reactquery/ssr?page=' + offset);
   // };

   return (
      <>
         <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pb-28">
            <div className="container">
               <Reactquery result={result} />
               <br />
               <center>
                  <button onClick={() => setPage((prev) => +prev - 10)}>
                     {'<<'} Prev
                  </button>
                  &nbsp; | &nbsp;
                  <button onClick={() => setPage((next) => +next + 10)}>
                     Next {'>>'}
                  </button>
               </center>
            </div>
         </section>
      </>
   );

};


const Ssr = async (props) => {
   // console.log("🚀 ~ file: SsrWrapper.jsx:6 ~ SsrWrapper ~ props:", props.search.page);
   const page = +props.search.page; // str to number
   const initialData = await getPokemons(
      {
         offset: page ? page : 1,
         limit: 8
      }
   );

   return <SsrWrapper data={initialData} limit={8} page={page ? page : 1} />;
};

export default Ssr;