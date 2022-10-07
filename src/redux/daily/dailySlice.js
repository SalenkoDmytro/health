import { createSlice } from '@reduxjs/toolkit';
import { dailyRateUnauthorized, dailyRateAuthorized } from './dailyOperations';

const initialState = {
  userId: null,
  dailyRate: null,
  // notAllowedProducts -> array of arrays wtf???!!!
  summaries: [],
  notAllowedProducts: [],
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const dailySlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    // --------------------REGISTER OPERATION--------------------

    [dailyRateUnauthorized.pending]: state => {
      state.isLoading = true;
    },
    [dailyRateUnauthorized.fulfilled]: (
      state,
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
    // --------------------LOG IN OPERATION--------------------(fulfilled?)

    [dailyRateAuthorized.pending]: state => {
      state.isLoading = true;
    },
    [dailyRateAuthorized.fulfilled]: (
      state,
      { payload: { id, dailyRate, summaries, notAllowedProducts } }
    ) => {
      state.userId = id;
      state.dailyRate = dailyRate;
      state.summaries = summaries;
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

export default dailySlice.reducer;
