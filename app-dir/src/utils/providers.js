"use client";

import { ThemeProvider } from "next-themes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import React from 'react'

const Providers = ({ children }) => {
   const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }))
   return (
      <QueryClientProvider client={client}>
         <ThemeProvider attribute="class" enableSystem="false" defaultTheme="dark">
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
         </ThemeProvider>
      </QueryClientProvider>

   );
}

export default Providers