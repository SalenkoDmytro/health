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

//**GET USER INFO AFTER AUTHORIZATION */

export const getUserInfo = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      const res = await axios.get('/user');
      console.log('res.data', res.data);
      const obj = getDataFromGetUserInfo(res.data);
      return obj;
    } catch (err) {
      return thunkAPI.rejectWithValue('Sorry, server Error!');
    }
  }
);

function getDataFromGetUserInfo(data) {
  const dailyRate = data.userData.dailyRate;
  const notAllowedProducts = [data.userData.notAllowedProducts];
  const { height, age, weight, desiredWeight, bloodType } = data.userData;
  const bodyParams = { height, age, weight, desiredWeight, bloodType };
  let eatenProducts = [];
  let daySummary = {
    kcalConsumed: null,
    kcalLeft: null,
    percentsOfDailyRate: null,
  };

  const date = new Date();
  const isTodayDay = data.days.find(
    item => item.date === date.toISOString().split('T')[0]
  );

  if (isTodayDay) {
    const todaySummary = data.days[data.days.length - 1];
    const { kcalConsumed, kcalLeft, percentsOfDailyRate } =
      todaySummary.daySummary;

    eatenProducts = todaySummary.eatenProducts;

    daySummary = {
      kcalConsumed,
      kcalLeft,
      percentsOfDailyRate,
    };
  }

  return {
    dailyRate,
    bodyParams,
    daySummary,
    eatenProducts,
    notAllowedProducts,
  };
}

//**POST USER BODY PARAMS BY DAILY RATE */

// -------------------UNAUTHORIZED USER-------------------
export const dailyRateUnauthorized = createAsyncThunk(
  'dailyRate/calcAuth',
  async (requestData, { rejectWithValue }) => {
    const a = { ...requestData, bloodType: Number(requestData.bloodType) };
    try {
      const { data } = await axios.post('/daily-rate', a);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// -------------------AUTHORIZED USER-------------------
export const dailyRateAuthorized = createAsyncThunk(
  'dailyRate/calcAuth',
  async ({ userId, ...requestData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/daily-rate/${userId}`, requestData);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
