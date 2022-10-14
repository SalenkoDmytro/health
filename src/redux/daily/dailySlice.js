import { createSlice } from '@reduxjs/toolkit';
import { dailyRateUnauthorized, dailyRateAuthorized } from './dailyOperations';

const initialState = {
  userId: null,
  dailyRate: null,
  summaries: [],
  notAllowedProducts: [],
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const dailySlice = createSlice({
  name: 'dailyRate',
  initialState,
  reducers: {
    setStateDailySlice(state, action) {
      // state.userId = action.payload.id;
      // state.dailyRate = action.payload.userData;
      // // state.summaries = action.payload.userData;
    },

    resetStateDailySlice(state) {
      state.userId = null;
      state.dailyRate = null;
      state.summaries = [];
      state.notAllowedProducts = [];
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
  },

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
    // --------------------LOG IN OPERATION--------------------

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

export const { resetStateDailySlice } = dailySlice.actions;

export default dailySlice.reducer;
