// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// // -------------------UNAUTHORIZED USER-------------------
// export const dailyRateUnauthorized = createAsyncThunk(
//   'dailyRate/calcUnauth',
//   async (requestData, { rejectWithValue }) => {
//     const a = { ...requestData, bloodType: Number(requestData.bloodType) };
//     try {
//       const { data } = await axios.post('/daily-rate', a);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // -------------------AUTHORIZED USER-------------------
// export const dailyRateAuthorized = createAsyncThunk(
//   'dailyRate/calcAuth',
//   async ({ userId, ...requestData }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(`/daily-rate/${userId}`, requestData);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
