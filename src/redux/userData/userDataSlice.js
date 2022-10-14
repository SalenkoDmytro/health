import { createSlice } from '@reduxjs/toolkit';
// import { addDay, deleteDay, addDayInfo } from './dayOperations';
import { getUserInfo } from './userDataOperation';
import {
  dailyRateUnauthorized,
  dailyRateAuthorized,
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
      state.bodyParams = { ...bodyParams };
      state.notAllowedProducts = [...notAllowedProducts];
      state.dailyRate = dailyRate;
      state.eatenProducts = [...eatenProducts];
      // state.daySummary = { ...payload.daySummary };
    },

    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //**DAY INFO */
    // //addNewDay
    // [addDay.pending]: state => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [addDay.fulfilled]: (state, action) => {
    //   state.dayId = action.payload.day.id;
    //   state.daySummary = action.payload.day.daySummary;
    //   state.eatenProducts = action.payload.day.eatenProducts.reverse();
    // },

    // [addDay.rejected]: (state, action) => {
    //   state.error = action.payload;
    // },
    // //deleteDay
    // [deleteDay.pending]: state => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [deleteDay.fulfilled]: (state, action) => {
    //   state.daySummary = action.payload.result.newDaySummary;
    //   state.eatenProducts = state.eatenProducts.filter(
    //     product => product.id !== action.payload.data.eatenProductId
    //   );
    // },
    // [deleteDay.rejected]: (state, action) => {
    //   state.error = action.payload;
    // },
    // //addDayInformation
    // [addDayInfo.pending]: state => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [addDayInfo.fulfilled]: (state, action) => {
    //   state.dayId = action.payload.id;
    //   state.eatenProducts = action.payload.eatenProducts;
    //   state.daySummary = action.payload.daySummary;
    //   state.date = action.payload.date;
    //   state.dayInfo = action.payload;
    // },
    // [addDayInfo.rejected]: (state, action) => {
    //   state.error = action.payload;
    // },

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
