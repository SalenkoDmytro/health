import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toastConfigs from 'config/toast';
import { toast } from 'react-toastify';
import { date } from 'yup';

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
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//**USER DATA OPERATION IN DAIRY */

export const addDayProduct = createAsyncThunk(
  'addDayProduct/addDayProduct',
  async (date, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      const res = await axios.post('/day', date);
      toast.info(`Ваш продукт добавлен в список`);

      console.log('add date', date);
      const obj = {
        day: res.data.newDay || res.data.day,
        eatenProducts: res.data.eatenProducts,
        daySummary: res.data.newSummary || res.data.summary,
      };
      return obj;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        "Sorry, can't add new day, server Error!"
      );
    }
  }
);

export const deleteDayProduct = createAsyncThunk(
  'deleteDayProduct/deleteDayProduct',
  async (data, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);
      const result = await axios.delete(`/day`, {
        data,
      });

      console.log('deleteDayProduct data', data);
      const obj = {
        dailyRate: result.data.dailyRate,
        daySummary: {
          kcalConsumed: result.data.kcalConsumed,
          kcalLeft: result.data.kcalLeft,
          percentsOfDailyRate: result.data.percentsOfDailyRate,
        },
        eatenProductId: date.eatenProductId,
      };
      toast.info(`Ваш продукт успешно удален`, toastConfigs);

      return obj;
    } catch (err) {
      return thunkAPI.rejectWithValue("Sorry, can't delete day, server Error!");
    }
  }
);

export const getDayInfo = createAsyncThunk(
  'getDayInfo/getDayInfo',
  async (date, thunkAPI) => {
    try {
      const tokenLS = thunkAPI.getState().auth.accessToken;
      token.set(tokenLS);

      const res = await axios.post('/day/info', date);
      const obj = {
        dayId: res.data.daySummary.id,
        dailyRate: res.data.daySummary.dailyRate,
        eatenProducts: res.data.eatenProducts,
        daySummary: {
          kcalConsumed: res.data.daySummary.kcalConsumed,
          kcalLeft: res.data.daySummary.kcalLeft,
          percentsOfDailyRate: res.data.daySummary.percentsOfDailyRate,
        },
      };
      return obj;
    } catch (err) {
      console.log('error', err.request.status);

      return thunkAPI.rejectWithValue(
        "Sorry, can't add new information, server Error!"
      );
    }
  }
);
