import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import toastConfigs from 'config/toast';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const addDay = createAsyncThunk('add/addDay', async (date, thunkAPI) => {
  try {
    const tokenLS = thunkAPI.getState().auth.accessToken;
    token.set(tokenLS);
    const res = await axios.post('/day', date);
    toast.info(`Ваш продукт добавлен в список`);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue("Sorry, can't add new day, server Error!");
  }
});

export const deleteDay = createAsyncThunk(
  'delete/deleteDay',
  async (data, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      const result = await axios.delete(`/day`, {
        data,
      });
      const obj = {
        result: result.data,
        data,
      };
      toast.info(`Ваш продукт успешно удален`, toastConfigs);

      return obj;
    } catch (err) {
      return thunkAPI.rejectWithValue("Sorry, can't delete day, server Error!");
    }
  }
);

export const addDayInfo = createAsyncThunk(
  'addInfo/addDayInfo',
  async (date, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);

      const res = await axios.post('/day/info', date);
      return res.data;
    } catch (err) {
      console.log('error', err.request.status);
      console.log(date);

      return thunkAPI.rejectWithValue(
        "Sorry, can't add new information, server Error!"
      );
    }
  }
);
