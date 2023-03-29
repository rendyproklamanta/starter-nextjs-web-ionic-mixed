import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({
      baseUrl: "/api/auth/token",
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
   }),
});

// Export hooks for usage in functional components
export const {
   useGetUserQuery,
   util: { getRunningQueriesThunk },
} = authApi;

// export endpoints for use in SSR
export const { getUser } = authApi.endpoints;