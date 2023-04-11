import { getUsers } from '@/src/services/users';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ListUsers from '.';

const ListUsersCsr = () => {
   const result = useQuery({
      queryKey: ["initial-users"],
      queryFn: () => getUsers(),
   });

   return <ListUsers result={result} />;
};

export default ListUsersCsr;