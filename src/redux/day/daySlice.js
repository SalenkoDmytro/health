import { createSlice } from '@reduxjs/toolkit';
import { addDay, deleteDay, addDayInfo } from './dayOperations';

const daySlice = createSlice({
  name: 'contacts',
  initialState: {
    day: null,
    dayInfo: null,
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
      state.day = action.payload;
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
      state.day = null;
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
      state.dayInfo = action.payload;
    },
    [addDayInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default daySlice.reducer;
