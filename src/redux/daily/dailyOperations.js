import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const dailyRateUnauthorized = createAsyncThunk(
  'dailyRate/calcUnauth',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/daily-rate', params);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ------------- НЕ УВЕРЕН ПО ПОВОДУ ПЕРЕДАЧИ ПАРАМЕТРОВ

export const dailyRateAuthorized = createAsyncThunk(
  'dailyRate/calcAuth',
  async (userId, params, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/daily-rate/${userId}`, params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
