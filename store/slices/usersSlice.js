// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   users: []
// };

// export const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//       addUser: (state, action) => {
//           state.users = [...state.users, action.payload];
//       }
//   }
// });

// export const { addUser } = usersSlice.actions;

// export default usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
   value: []
};

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      addUser(state, action) {
         state.value = [...state.value, action.payload];
      },

      extraReducers: {
         [HYDRATE]: (state, action) => {
            return {
               ...state,
               ...action.payload.users,
            };
         },
      },
   },
});

// console.log('dispacth', (state) => state.users.value;;

export const { addUser } = usersSlice.actions;
export const selectAddUser = (state) => state.users.value;
export default usersSlice.reducer;