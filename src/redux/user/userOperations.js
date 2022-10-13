import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getUser = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
  try {
    const tokenLS = thunkAPI.getState().auth.accessToken;
    token.set(tokenLS);

    const res = await axios.get('/user');
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Sorry, server Error!');
  }
});
