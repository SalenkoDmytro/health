import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASIC_URL = 'https://slimmom-backend.goit.global';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASIC_URL}/user`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  },
);
