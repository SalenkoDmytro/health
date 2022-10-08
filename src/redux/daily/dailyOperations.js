import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// -------------------UNAUTHORIZED USER-------------------
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

// ------------- ЕСЛИ БУДУТ ОШИБКИ - ПЕРЕСМОТРЕТЬ ПЕРЕДАЧУ ПАРАМЕТРОВ!

// -------------------AUTHORIZED USER-------------------
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
