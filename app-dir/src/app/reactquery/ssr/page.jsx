import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/src/utils/getQueryClient";
import { Hydrate } from "@tanstack/react-query";
import { getUsers } from "@/src/services/users";
import HydratedUsers from "@/src/components/ListUsers/ListUsersSsr";

export default async function Page() {

   const queryClient = getQueryClient();
   await queryClient.prefetchQuery(["hydrate-users"], getUsers);
   const dehydratedState = dehydrate(queryClient);

   return (
      <Hydrate state={dehydratedState}>
         <HydratedUsers />
      </Hydrate>
   );
}
