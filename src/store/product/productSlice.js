import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const";

const initialState = {
  products: [],
  error: "",
  isLoading: false,
};

export const productRequestAsync = createAsyncThunk(
  "products/fetch",
  (category) =>
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
      .then((req) => req.json())
      .catch((error) => ({ error }))
);

const productSlice = createSlice({
  initialState,
  name: "products",

  extraReducers: (builder) => {
    builder
      .addCase(productRequestAsync.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        state.error = "";
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(productRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
