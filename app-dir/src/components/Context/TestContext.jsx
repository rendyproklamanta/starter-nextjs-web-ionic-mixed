import { useGlobalContext } from '@/src/contexts/global';
import React from 'react';

export const TestContext = () => {
   const { color, setColor, count, setCount } = useGlobalContext();

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
         <p>Current color : {color}</p>
         <br />
         <button onClick={() => setColor('blue')}>[Set color to {'>>'} blue]</button>
         <br />
         <button onClick={() => setColor('yellow')}>[Set color to {'>>'} yellow]</button>
         <br /><br />
         <hr></hr>
         <br />
      </div>

   );
};