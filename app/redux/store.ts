'use client';

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import langReducer from './features/lang/langSlice';
import { userApi } from './services/userApi';
import { dataApi } from './services/dataApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { skeletonApi } from './services/masterDataApi';

export const store = configureStore({
  reducer: {
    authReducer,
    langReducer,
    [skeletonApi.reducerPath]: skeletonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat([userApi.middleware, skeletonApi.middleware, dataApi.middleware])
      .filter((middleware) => typeof middleware === 'function'),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
