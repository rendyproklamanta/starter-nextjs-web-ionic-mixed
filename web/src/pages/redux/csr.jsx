import React, { useState } from 'react';
import { useGetPokemonListQuery } from '../../store/api/pokemonApi';
import Link from 'next/link';
import { shuffle } from "lodash";
import { loadCSR } from '../../utils/global';
import Counter from '../../components/Counter';

const Csr = () => {
   const [page, setPage] = useState(1);
   const result = useGetPokemonListQuery({ offset: page < 1 ? 1 : page, limit: 10 });
   const { isFetching, data, refetch } = result;

   const handleRefetch = () => {
      // force re-fetches the data
      refetch();
   };

   return (
      <>
         <div className="container">
            <div className="row d-flex justify-content-center py-vh-5 pb-0">
               <div className="col-12 col-lg-10 col-xl-8">
                  <div className="row">
                     <div className="col-12">

                        <h2>Test Counter</h2>
                        <Counter />

                        <br />

                        <h2>Test Redux Toolkit Query</h2>
                        <button onClick={handleRefetch}>
                           🔄 Refetch CSR
                        </button>
                        <button>
                           <Link href="/redux/ssr">{'<<'} Go To SSR Mode</Link>
                        </button>

                        <ul style={{ height: "300px" }}>
                           {isFetching ? 'Loading...' : shuffle(data.results).map((res, i) => (
                              <li key={i}>{res.name}</li>
                           ))}
                        </ul>

                        <button onClick={() => setPage((prev) => prev - 10)}>
                           Prev
                        </button>
                        <button onClick={() => setPage((next) => next + 10)}>
                           Next
                        </button>

                     </div>
                  </div>
               </div>
            </div>
         </div>

      </>
   );

};


export default loadCSR(Csr);