
import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/src/utils/getQueryClient";
import { Hydrate } from "@tanstack/react-query";
import ListUsers from "./listUsers";

async function getUsers() {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await res.json();
   return users;
}

export default async function Reactquery() {
   const queryClient = getQueryClient();
   await queryClient.prefetchQuery(["hydrate-users"], getUsers);
   const dehydratedState = dehydrate(queryClient);

   return (
      <Hydrate state={dehydratedState}>
         <ListUsers />
      </Hydrate>
   );
}
