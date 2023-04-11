"use client";

import { ThemeProvider } from "next-themes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { GlobalProvider } from "../contexts/global";

const Providers = ({ children }) => {
   const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }));
   return (
      <QueryClientProvider client={client}>
         <GlobalProvider>
            <ThemeProvider attribute="class" enableSystem="false" defaultTheme="dark">
               {children}
               <ReactQueryDevtools initialIsOpen={false} />
            </ThemeProvider>
         </GlobalProvider>
      </QueryClientProvider>

   );
};

export default Providers;