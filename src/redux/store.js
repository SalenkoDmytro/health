import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import productReducer from './productSearch/productSearchSlice';
import dailyReducer from './daily/dailySlice';
import dayReducer from './day/daySlice';
import userReducer from './user/userSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  dailyRate: persistReducer(persistConfig, dailyReducer),
  product: persistReducer(persistConfig, productReducer),
  day: persistReducer(persistConfig, dayReducer),
  user: persistReducer(persistConfig, userReducer),
});

// Persisting token field from auth slice to localstorage

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);


