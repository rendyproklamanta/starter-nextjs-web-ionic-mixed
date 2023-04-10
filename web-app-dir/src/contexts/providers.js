'use client';

import { GlobalProvider } from "./global";

export function Providers({ children }) {
   return (
      <GlobalProvider>
         {children}
      </GlobalProvider >
   );
}