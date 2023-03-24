import React from 'react';
import { useGetPokemonListQuery } from '../../store/query/pokemonApi';
import Counter from '../../components/Counter';
import Link from 'next/link';

const Csr = () => {
   const result = useGetPokemonListQuery();
   let { isLoading, data } = result;
   
   // data = data.results.slice().sort(() => 0.5 - Math.random());

   if (isLoading) {
      return ('Loading...');
   }

   return (
      <>
         <div className="container">
            <div className="row d-flex justify-content-center py-vh-5 pb-0">
               <div className="col-12 col-lg-10 col-xl-8">
                  <div className="row">
                     <div className="col-12">

                        <h2>Test Counter</h2>
                        <Counter />

                        <br/>

                        <h2>Test Redux Toolkit Query</h2>
                        <button>
                           <Link href="/pokemon/ssr">Go To SSR Mode {'>>'}</Link>
                        </button>

                        <ul>
                           {data.results.map((res, i) => (
                              <li key={i}>{res.name}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </>
   );


};

export default Csr;