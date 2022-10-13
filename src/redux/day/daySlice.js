import { createSlice } from '@reduxjs/toolkit';
import { addDay, deleteDay, addDayInfo } from './dayOperations';

const daySlice = createSlice({
  name: 'contacts',
  initialState: {
    dayId: null,
    date: null,
    daySummary: {},
    eatenProducts: [],
    // day: null,
    // dayInfo: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    filterItem: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    //addNewDay
    [addDay.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addDay.fulfilled]: (state, action) => {
      state.dayId = action.payload.day.id;
      state.daySummary = action.payload.daySummary;
      state.eatenProducts = action.payload.day.eatenProducts.reverse();
    },

    [addDay.rejected]: (state, action) => {
      state.error = action.payload;
    },
    //deleteDay
    [deleteDay.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteDay.fulfilled]: (state, action) => {
      state.daySummary = action.payload.result.newDaySummary;
      state.eatenProducts = state.eatenProducts.filter(
        product => product.id !== action.payload.data.eatenProductId
      );
    },
    [deleteDay.rejected]: (state, action) => {
      state.error = action.payload;
    },
    //addDayInformation
    [addDayInfo.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addDayInfo.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.dayId = action.payload.id;
      state.eatenProducts = action.payload.eatenProducts;
      state.daySummary = action.payload.daySummary;
      state.date = action.payload.date;
      state.dayInfo = action.payload;
    },
    [addDayInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default daySlice.reducer;
