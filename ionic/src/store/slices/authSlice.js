import { createSlice } from '@reduxjs/toolkit';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      value: typeof window !== 'undefined' && localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : null,
   },
   reducers: {
      setIsLoggedIn: (state, action) => {
         // const cookieTimeOut = new Date();
         // cookieTimeOut.setDate(cookieTimeOut.getDate() + 9999);
         // cookies.set('userinfo', JSON.stringify(action.payload), { path: "/",expires: cookieTimeOut });
         localStorage.setItem('userinfo', JSON.stringify(action.payload));

         state.value = action.payload;
      },
      setIsLoggedOut: (state) => {
         // cookies.remove("userinfo", { path: "/" });
         localStorage.removeItem("userinfo");
         state.value = null;
      },
   },
});

export const { setIsLoggedIn, setIsLoggedOut } = authSlice.actions;

export default authSlice.reducer;
