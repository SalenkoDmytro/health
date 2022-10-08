import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const productSearch = createAsyncThunk(
  'product/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/product');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
