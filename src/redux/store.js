import { configureStore } from '@reduxjs/toolkit';
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

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user','isLoggedIn','accessToken', 'refreshToken', 'sid'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    dailyRate: dailyReducer,
    product: productReducer,
    day: dayReducer,
    user: userReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE,
          PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);


