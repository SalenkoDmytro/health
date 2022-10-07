import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userOperations';

const initialState = {
  user: {
    email: '',
    username: '',
    id: '',
    userData: {
      weight: 0,
      height: 0,
      age: 0,
      bloodType: 0,
      desiredWeight: 0,
      dailyRate: 0,
      notAllowedProducts: [],
    },
    days: [],
  },
  token: null,
  isLogged: false,
  error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
      [getUser.pending]: (state) => {
        state.isLogged = true;
        state.error = null;
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
