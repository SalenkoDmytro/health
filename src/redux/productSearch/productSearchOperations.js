import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const productSearch = createAsyncThunk(
  'product/fetch',
  async (search, { rejectWithValue, getState }) => {
    try {
      const tokenLS = getState().auth.accessToken;
      token.set(tokenLS);

      const { data } = await axios.get('/product', {params: {
        search,
        }});

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

