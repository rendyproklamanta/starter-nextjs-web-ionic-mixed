'use client';

import { useGlobalContext } from '@/src/contexts/globalcontext';
import React from 'react';
import Spinner from '../Loader/Spinner';

export const TestContext = () => {
   const { loading, color, setColor, count, setCount, initialColorState, initialCountState } = useGlobalContext();
   // console.log("🚀 ~ file: TestContext.jsx:8 ~ TestContext ~ loading:", loading)

   return (
      <div style={{ marginBottom: "4rem", textAlign: "center" }} className='mt-[150px]'>
         <h4 style={{ marginBottom: 16 }}>Counter : {loading ? <Spinner /> : count ? count : initialCountState} </h4>
         <button onClick={() => setCount((prev) => prev - 1)} >
            [decrement (-)]
         </button>
         &nbsp;&nbsp;
         <button onClick={() => setCount((next) => next + 1)}>
            [increment (+)]
         </button>
         &nbsp;&nbsp;
         <button onClick={() => setCount(initialCountState)}>[reset (x)]</button>
         <br /><br />
         <hr></hr>
         <br />

         <p className='mb-5'>Current color : {loading ? <Spinner /> : color.value ? color.value : initialColorState.value}</p>
         <button onClick={() => setColor({ value: 'blue' })}>[Set color to {'>>'} blue]</button>
         <br />
         <button onClick={() => setColor({ value: 'yellow' })}>[Set color to {'>>'} yellow]</button>
         <br />
         <button onClick={() => setColor(initialColorState)}>[X Reset color X]</button>
         <br /><br />
         <hr></hr>
      </div>

   );
};