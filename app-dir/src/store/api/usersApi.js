import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const usersApi = createApi({
   reducerPath: 'usersApi',
   baseQuery: fetchBaseQuery({
      baseUrl: "https://reqres.in/api/users",
   }),
   extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === HYDRATE) {
         return action.payload[reducerPath];
      }
   },
   tagTypes: [],
   endpoints: (builder) => ({
      getUsersList: builder.query(
         { query: () => `/` },
      ),
      createUser: builder.mutation({
         query: ({ ...body }) => ({
            url: `/`,
            method: 'POST',
            body: { body },
         }),
      }),
      updateUser: builder.mutation({
         query: ({id, ...body }) => ({
            url: `/${id}`,
            method: 'PUT',
            body: { body },
         }),
      }),
   }),
});

// Export hooks for usage in functional components
export const {
   useGetUsersListQuery,
   useCreateUserMutation,
   useUpdateUserMutation,
   util: { getRunningQueriesThunk },
} = usersApi;

// export endpoints for use in SSR
export const { getUsersList } = usersApi.endpoints;