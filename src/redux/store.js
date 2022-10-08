// import {
//   configureStore,
//   getDefaultMiddleware,
//   combineReducers,
// } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import authReducer from './auth/authSlice';
// import productReducer from './productSearch/productSearchSlice';
// import dailyReducer from './daily/dailySlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['accessToken'],
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// const rootReducer = combineReducers({
//   auth: persistedReducer,
//   dailyRate: dailyReducer,
//   product: productReducer,
// });
// //
// // Persisting token field from auth slice to localstorage

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
