'use client';

import { getPokemons } from "@/src/services/users";
import ListUsers from "@/src/components/ListUsers";
import { useSearchParams } from "next/navigation";
import ListUsersSsr from "@/src/components/ListUsers/ListUsersSsr";

export default async function Page() {

   // const queryClient = getQueryClient();
   // await queryClient.prefetchQuery(["hydrate-poke"], getUsers);
   // const dehydratedState = dehydrate(queryClient);

   // return (
   //    <Hydrate state={dehydratedState}>
   //       <HydratedUsers />
   //    </Hydrate>
   // );

   const searchParams = useSearchParams();
   const page = searchParams.get('page');

   const initialData = await getPokemons({ offset: page, limit: 8 });

   return <ListUsersSsr users={initialData} />;
}
