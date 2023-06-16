import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_API_URL,
   }),
   extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === HYDRATE) {
         return action.payload[reducerPath];
      }
   },
   tagTypes: [],
   endpoints: (builder) => ({
      getUser: builder.query(
         { query: () => `/` },
      ),
      postUserLogin: builder.mutation({
         query: (payload) => ({
            url: '/auth/login',
            method: 'POST',
            body: new URLSearchParams(payload),
            headers: {
               'Content-type': 'application/x-www-form-urlencoded',
            },
         }),
      }),
      getTokenData: builder.query(
         {
            query: ({ token }) => `auth/tokendata?token=${token}`,
         },
      ),
   }),
});

// Export hooks for usage in functional components
export const {
   useGetUserQuery,
   usePostUserLoginMutation,
   useGetTokenDataQuery,
   util: { getRunningQueriesThunk },
} = authApi;

// export endpoints for use in SSR
export const { getUser } = authApi.endpoints;