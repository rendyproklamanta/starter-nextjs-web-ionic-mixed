'use client';

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
   const [color, setColor] = useState('red');
   const [count, setCount] = useState(0);

   return (
      <GlobalContext.Provider value={{
         color, setColor,
         count, setCount
      }}>
         {children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext);