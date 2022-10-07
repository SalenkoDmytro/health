import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASIC_URL = 'https://slimmom-backend.goit.global';

export const addDay = createAsyncThunk(
  'add/addDay',
  async ( date , thunkAPI) => {
    try {
      const res = await axios.post(`${BASIC_URL}/day`,  date );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t add new day, server Error!');
    }
  },
);

export const deleteDay = createAsyncThunk(
  'delete/deleteDay',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${BASIC_URL}/day/${id}`);
      return { id };
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t delete day, server Error!');
    }
  },
);

export const addDayInfo = createAsyncThunk(
  'addInfo/addDayInfo',
  async ( date , thunkAPI) => {
    try {
      const res = await axios.post(`${BASIC_URL}/day/info`,  date );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, can\'t add new information, server Error!');
    }
  },
);
