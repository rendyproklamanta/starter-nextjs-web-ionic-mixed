import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, reset, selectCount } from '../store/slices/counterSlice';

const Counter = () => {
   const count = useSelector(selectCount);
   const dispatch = useDispatch();
   return (
      <div className='mb-3'>
         <button
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(5))}
         >
            Increment By Amount
         </button>
         <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
         >
            Increment
         </button>
         <span>&nbsp;&nbsp; {count} &nbsp;&nbsp;</span>
         <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
         >
            Decrement
         </button>
         <button
            aria-label="Reset value"
            onClick={() => dispatch(reset())}
         >
            Reset
         </button>
      </div>
   );
};

export default Counter;