import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counter from './slices/counterSlice';
import { pokemonApi } from './api/pokemonApi';
import { usersApi } from './api/usersApi';
import { authApi } from './api/authApi';
import auth from './slices/authSlice';

const combinedReducer = combineReducers({
   counter,
   auth,
   [pokemonApi.reducerPath]: pokemonApi.reducer,
   [usersApi.reducerPath]: usersApi.reducer,
   [authApi.reducerPath]: authApi.reducer,
});

export const store = () =>

   configureStore({
      reducer: combinedReducer,
      devTools: true,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
         })
            .concat([
               pokemonApi.middleware,
               usersApi.middleware,
               authApi.middleware,
            ]),
   });

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export const wrapper = createWrapper(store);