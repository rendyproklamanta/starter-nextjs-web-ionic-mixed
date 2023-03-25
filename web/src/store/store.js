import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counter from './slices/counterSlice';
import { pokemonApi } from './api/pokemonApi';
import { usersApi } from './api/usersApi';
// import storage from 'redux-persist/lib/storage';
// import {
//    persistReducer,
//    // FLUSH,
//    // REHYDRATE,
//    // PAUSE,
//    // PERSIST,
//    // PURGE,
//    // REGISTER,
// } from 'redux-persist';

const combinedReducer = combineReducers({
   counter,
   [pokemonApi.reducerPath]: pokemonApi.reducer,
   [usersApi.reducerPath]: usersApi.reducer,
});

// const persistConfig = {
//    key: 'root',
//    storage,
// };

// const persistedReducer = persistReducer(persistConfig, combinedReducer);

// const masterReducer = (state, action) => {
//    if (action.type === HYDRATE) {
//       const nextState = {
//          ...state, // use previous state
//          counter: {
//             count: state.counter.count + action.payload.counter.count,
//          },
//       };
//       return nextState;
//    } else {
//       return combinedReducer(state, action);
//    }
// };

export const makeStore = () =>

   configureStore({
      reducer: combinedReducer,
      // reducer: persistedReducer,
      devTools: true,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            // serializableCheck: {
            //    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
         })
            .concat([pokemonApi.middleware, usersApi.middleware])
      ,
   });

export const wrapper = createWrapper(makeStore);