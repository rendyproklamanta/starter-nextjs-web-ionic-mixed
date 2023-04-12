'use client';

import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({});

// const initialCartState = [
//    {
//       id: 1,
//       name: "Item One"
//    },
//    {
//       id: 2,
//       name: "Item Two"
//    }
// ];

const initialColorState = { color: "red" };

const colorState = () => {
   const colorStorage = typeof window !== "undefined" ? window.localStorage.getItem('color') : false;
   return colorStorage ? JSON.parse(colorStorage) : initialColorState;
};

export const GlobalProvider = props => {
   // const [color, setColor] = useState('red');
   const [color, setColor] = useState(colorState);
   const [count, setCount] = useState(0);

   useEffect(() => {
      window.localStorage.setItem("color", JSON.stringify(color));
   }, [color]);

   return (
      <GlobalContext.Provider value={{
         color, setColor,
         count, setCount,
         initialColorState,
      }}>
         {props.children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext);