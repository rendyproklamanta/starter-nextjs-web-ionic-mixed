'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SsrLayout = ({ children }) => {
   const searchParams = useSearchParams();
   const offset = searchParams.get('offset');
   const router = useRouter();

   if (!offset) {
      router.push(`/second/ssr?offset=10`);
   }

   return (
      <div>{children}</div>
   );
};

export default SsrLayout;