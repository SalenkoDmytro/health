import { createSlice } from '@reduxjs/toolkit';
// import { addDay, deleteDay, addDayInfo } from './dayOperations';
import { getUserInfo } from './userDataOperation';
import {
  dailyRateUnauthorized,
  dailyRateAuthorized,
} from './userDataOperation';
import {
  addDayProduct,
  deleteDayProduct,
  getDayInfo,
} from './userDataOperation';

const initialState = {
  dayId: null,
  eatenProducts: null,
  dailyRate: 0,
  daySummary: {
    kcalConsumed: null,
    kcalLeft: null,
    percentsOfDailyRate: null,
  },
  bodyParams: {
    height: null,
    age: null,
    weight: null,
    desiredWeight: null,
    bloodType: null,
  },
  notAllowedProducts: null,
  isLoading: false,
  error: null,
};

const getUserData = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    resetStateDaySlice(state) {},
  },

  extraReducers: {
    //**GET USER INFO AFTER AUTHORIZATION */
    [getUserInfo.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [getUserInfo.fulfilled]: (
      state,
      { payload: { bodyParams, notAllowedProducts, dailyRate, eatenProducts } }
    ) => {
      state.bodyParams = bodyParams;
      state.notAllowedProducts = notAllowedProducts;
      state.dailyRate = dailyRate;
      state.eatenProducts = eatenProducts;
      // state.daySummary = payload.daySummary ;
    },

    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //**DAY INFO */
    //!addDayProduct
    [addDayProduct.pending]: state => {
      // state.isLoading = true;
      state.error = null;
    },
    [addDayProduct.fulfilled]: (state, action) => {
      console.log('addDayProduct', action.payload);
      state.dayId = action.payload.day.id;
      state.dailyRate = action.payload.day.daySummary.dailyRate;

      state.daySummary.kcalConsumed =
        action.payload.day.daySummary.kcalConsumed;
      state.daySummary.kcalLeft = action.payload.day.daySummary.kcalLeft;
      state.daySummary.percentsOfDailyRate =
        action.payload.day.daySummary.percentsOfDailyRate;

      state.eatenProducts = action.payload.day.eatenProducts;
    },

    [addDayProduct.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //! deleteDayProduct
    [deleteDayProduct.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteDayProduct.fulfilled]: (state, action) => {
      state.dailyRate = action.payload.dailyRate;
      state.daySummary = action.payload.daySummary;
      state.eatenProducts = state.eatenProducts.filter(
        product => product.id !== action.payload.eatenProductId
      );

      state.isLoading = false;
    },
    [deleteDayProduct.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    //!getDayInfo
    [getDayInfo.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getDayInfo.fulfilled]: (
      state,
      { payload: { dayId, dailyRate, eatenProducts, daySummary } }
    ) => {
      console.log('action.payload', eatenProducts);
      state.dailyRate = dailyRate;
      state.dayId = dayId;
      state.eatenProducts = eatenProducts;
      // state.daySummary = { ...daySummary };
      state.isLoading = false;
    },
    [getDayInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //**DAILY RATE */
    // --------------------REGISTER OPERATION--------------------
    [dailyRateUnauthorized.pending]: state => {
      state.isLoading = true;
    },
    [dailyRateUnauthorized.fulfilled]: (
      state,
      // payload
      { payload: { dailyRate, notAllowedProducts } }
    ) => {
      console.log('payload LOG OUT', notAllowedProducts);
      state.dailyRate = dailyRate;
      state.notAllowedProducts = notAllowedProducts;
      state.isLoading = false;
    },
    [dailyRateUnauthorized.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------LOG IN OPERATION--------------------

    [dailyRateAuthorized.pending]: state => {
      state.isLoading = true;
    },
    [dailyRateAuthorized.fulfilled]: (
      state,
      // payload
      { payload: { id, dailyRate, summaries, notAllowedProducts } }
    ) => {
      // console.log('payload LOG IN', payload);
      // state.userId = id;
      state.dailyRate = dailyRate;
      state.daySummary = summaries;
      state.notAllowedProducts = notAllowedProducts;

      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [dailyRateAuthorized.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default getUserData.reducer;
