import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userOperations';

const initialState = {
    email: '',
    username: '',
    id: '',
    userData: null,
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
        const { username, id, email } = action.payload;
        state.userData = action.payload.userData;
        state.id = id;
        state.email = email;
        state.username = username;
      },
      [getUser.rejected]: (state, action) => {
        state.error = action.payload;
      }
    }
  },
);

export default userSlice.reducer;
