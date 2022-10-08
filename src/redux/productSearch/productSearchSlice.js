import { createSlice } from '@reduxjs/toolkit';
import { productSearch } from './productSearchOperations';

const initialState = {
  product: [],
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    // --------------------PRODUCT-SEARCH OPERATION--------------------

    [productSearch.pending]: state => {
      state.isLoading = true;
    },
    [productSearch.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.isLoading = false;
    },
    [productSearch.rejected]: (state, { payload: { message } }) => {
      state.isLoading = false;
      state.error = message;
    },
  },
});

export default productSlice.reducer;
