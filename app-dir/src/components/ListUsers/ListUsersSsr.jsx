'use client';

import { getUsers } from '@/src/services/users';
import { useQuery } from '@tanstack/react-query';
import ListUsers from '.';

export default function ListUsersSsr() {

   // This query was not prefetched on the server and will not start
   // fetching until on the client, both patterns are fine to mix
   const result = useQuery({
      queryKey: ["hydrate-users"],
      queryFn: () => getUsers(),
   });

   return (
      <ListUsers result={result} />
   );

}