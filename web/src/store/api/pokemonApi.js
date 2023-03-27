import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const pokemonApi = createApi({
   reducerPath: 'pokemonApi',
   baseQuery: fetchBaseQuery({
      baseUrl: "https://pokeapi.co/api/v2/",
   }),
   extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === HYDRATE) {
         return action.payload[reducerPath];
      }
   },
   tagTypes: [],
   endpoints: (builder) => ({
      getPokemonByName: builder.query(
         { query: (name) => `pokemon/${name}`, }
      ),
      getPokemonList: builder.query(
         {
            query: ({ offset, limit }) => `pokemon/?offset=${offset}&limit=${limit}`,
         },

      ),
   }),
});

// Export hooks for usage in functional components
export const {
   useGetPokemonByNameQuery,
   useGetPokemonListQuery,
   util: { getRunningQueriesThunk },
} = pokemonApi;

// export endpoints for use in SSR
export const { getPokemonByName, getPokemonList } = pokemonApi.endpoints;