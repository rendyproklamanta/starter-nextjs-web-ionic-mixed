import { useGlobalContext } from '@/src/contexts/globalcontext';
import React from 'react';

export const TestContext = () => {
   const { color, setColor, count, setCount, initialColorState } = useGlobalContext();

   return (
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
         <h4 style={{ marginBottom: 16 }}>Counter : {count}</h4>
         <button onClick={() => setCount((prev) => prev + 1)}>[increment (+)]</button>
         <button
            onClick={() => setCount((prev) => prev - 1)}
            style={{ marginInline: 16 }}
         >
            [decrement (-)]
         </button>
         <button onClick={() => setCount(0)}>[reset (x)]</button>
         <br /><br />
         <hr></hr>
         <br />
         <p className='mb-5'>Current color : {color.color}</p>
         <button onClick={() => setColor({ color: 'blue' })}>[Set color to {'>>'} blue]</button>
         <br />
         <button onClick={() => setColor({ color: 'yellow' })}>[Set color to {'>>'} yellow]</button>
         <br />
         <button onClick={() => setColor(initialColorState)}>[X Reset color X]</button>
         <br /><br />
         <hr></hr>
         <br />
      </div>

   );
};