import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userOperations';

const initialState = {
    email: '',
    username: '',
    id: '',
    userData: {
      weight: null,
      height: null,
      age: null,
      bloodType: null,
      desiredWeight: null,
      dailyRate: null,
      notAllowedProducts: [],
    },
    days: [],
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
      [getUser.pending]: (state) => {
        state.isLoading = true;
        state.isLoggedIn = true;
      },
      [getUser.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.item = action.payload;
      },
      [getUser.rejected]: (state, action) => {
        state.error = action.payload;
      }
    }
  },
);

export default userSlice.reducer;
