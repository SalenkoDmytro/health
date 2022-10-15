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
  userId: null,
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

const getUserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    resetStateUserDataSlice(state) {
      state.userId = null;
      state.dayId = null;
      state.eatenProducts = null;
      state.dailyRate = null;
      state.daySummary = null;
      state.bodyParams = null;
      state.notAllowedProducts = null;
      state.isLoading = null;
      state.error = null;
    },
  },

  extraReducers: {
    //**GET USER INFO AFTER AUTHORIZATION */
    [getUserInfo.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [getUserInfo.fulfilled]: (
      state,
      {
        payload: {
          userId,
          bodyParams,
          notAllowedProducts,
          dailyRate,
          eatenProducts,
          daySummary,
        },
      }
    ) => {
      state.userId = userId;
      state.bodyParams = bodyParams;
      state.notAllowedProducts = notAllowedProducts;
      state.dailyRate = dailyRate;
      state.eatenProducts = eatenProducts;
      state.daySummary = daySummary;
    },

    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //**DAY INFO */
    //!addDayProduct
    [addDayProduct.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addDayProduct.fulfilled]: (state, action) => {
      state.dayId = action.payload.day.id;
      state.dailyRate = action.payload.day.daySummary.dailyRate;

      state.daySummary.kcalConsumed =
        action.payload.day.daySummary.kcalConsumed;
      state.daySummary.kcalLeft = action.payload.day.daySummary.kcalLeft;
      state.daySummary.percentsOfDailyRate =
        action.payload.day.daySummary.percentsOfDailyRate;

      state.eatenProducts = action.payload.day.eatenProducts;
      state.isLoading = false;
    },

    [addDayProduct.rejected]: (state, action) => {
      state.isLoading = false;
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
      state.isLoading = false;
      state.error = action.payload;
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
    // --------------------NON AUTH USER DAILY RATE--------------------
    [dailyRateUnauthorized.pending]: state => {
      state.isLoading = true;
    },
    [dailyRateUnauthorized.fulfilled]: (
      state,
      // payload
      { payload: { dailyRate, notAllowedProducts } }
    ) => {
      state.dailyRate = dailyRate;
      state.notAllowedProducts = notAllowedProducts;
      state.isLoading = false;
    },
    [dailyRateUnauthorized.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // -------------------- AUTH USER DAILY RATE--------------------

    [dailyRateAuthorized.pending]: state => {
      state.isLoading = true;
    },
    [dailyRateAuthorized.fulfilled]: (state, { payload }) => {
      // state.userId = payload.id;
      state.dailyRate = payload.data.dailyRate;
      // state.daySummary = payload.summaries;
      state.notAllowedProducts = payload.data.notAllowedProducts;
      state.bodyParams = payload.reqData;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [dailyRateAuthorized.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { resetStateUserDataSlice } = getUserDataSlice.actions;
export default getUserDataSlice.reducer;
