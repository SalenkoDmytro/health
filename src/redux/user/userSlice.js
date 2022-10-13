import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userOperations';

export const initialState = {
  email: '',
  username: '',
  id: '',
  userData: null,
  days: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStateUserSlice(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [getUser.pending]: state => {
      state.isLoading = true;
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
    },
  },
});

export const { resetStateUserSlice } = userSlice.actions;
export default userSlice.reducer;
