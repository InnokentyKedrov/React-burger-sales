import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const";

const initialState = {
  category: [],
  error: "",
  activeCategory: 0,
  isLoading: false,
};

export const categoryRequestAsync = createAsyncThunk("category/fetch", () => {
  return fetch(`${API_URI}${POSTFIX}/category`)
    .then((req) => req.json())
    .catch((error) => ({ error }));
});

const categoreSlice = createSlice({
  initialState,
  name: "category",
  reducers: {
    changeCategory(state, action) {
      state.activeCategory = action.payload.indexCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryRequestAsync.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(categoryRequestAsync.fulfilled, (state, action) => {
        state.error = "";
        state.category = action.payload;
        state.isLoading = false;
      })
      .addCase(categoryRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const { changeCategory } = categoreSlice.actions;

export default categoreSlice.reducer;
