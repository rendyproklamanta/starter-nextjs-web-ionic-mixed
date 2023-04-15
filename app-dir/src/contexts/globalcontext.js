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

const initialColorState = { value: "red", secondary: 'grey' };
const initialCountState = 0;

export const GlobalProvider = props => {
   const [color, setColor] = useState(false);
   const [count, setCount] = useState(false);
   const [loading, isLoading] = useState(true);

   useEffect(() => {
      const colorStorage = window.localStorage.getItem('color');
      const countStorage = window.localStorage.getItem('count');

      colorStorage && setColor(JSON.parse(colorStorage));
      countStorage && setCount(JSON.parse(countStorage));

      isLoading(false);
   }, []);

   useEffect(() => {
      window.localStorage.setItem("color", JSON.stringify(color));
      window.localStorage.setItem("count", JSON.stringify(count));
   }, [color, count]);

   return (
      <GlobalContext.Provider value={{
         loading,
         color, setColor, initialColorState,
         count, setCount, initialCountState,
      }}>
         {props.children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext);