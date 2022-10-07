import { createSlice } from '@reduxjs/toolkit';
import { addDay, deleteDay } from './dayOperations';

const daySlice = createSlice({
  name: 'contacts',
  initialState: {
    date: null,
    token: null,
    isLogged: false,
    error: null,
  },
  reducers: {
    filterItem: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    //addNewDay
    [addDay.pending]: (state) => {
      state.isLogged = true;
      state.error = null;
    },
    [addDay.fulfilled]: (state, action) => {
      state.item.push(action.payload);
    },
    [addDay.rejected]: (state, action) => {
      state.error = action.payload;
    },
    //deleteDay
    [deleteDay.pending]: (state) => {
      state.isLogged = true;
      state.error = null;
    },
    [deleteDay.fulfilled]: (state, action) => {
      state.item = state.item.filter(contact => contact.id !== action.payload.id);
    },
    [deleteDay.rejected]: (state, action) => {
      state.error = action.payload;
    },
    //addDayInformation
    [addDay.pending]: (state) => {
      state.isLogged = true;
      state.error = null;
    },
    [addDay.fulfilled]: (state, action) => {
      state.item.push(action.payload);
    },
    [addDay.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default daySlice.reducer;
