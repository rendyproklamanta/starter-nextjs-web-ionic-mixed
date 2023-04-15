'use client';

import React from 'react';
import { useGetPokemonListQuery } from '../../../../store/api/pokemonApi';

const CtnCsr = ({ children }) => {

   const { isFetching, data, refetch } = useGetPokemonListQuery({ offset: 1, limit: 10 });

   // useEffect(() => {
   //    const fetchData = async () => {
   //       const result = await AppDispatch(getPokemonList.initiate(
   //          { offset: 1, limit: 10 }
   //       ));
   //       setData(result.data);
   //    };
   //    fetchData();

   // }, []);

   return (
      <div>
         {children}
         {isFetching && 'Loading...'}
         <ul>
            {data && data.results.map((item, i) => (
               <li key={i}>{item.name}</li>
            ))}
         </ul>
      </div>
   );
};

export default CtnCsr;