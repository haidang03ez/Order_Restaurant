import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductDetails, fetchProductList } from "../../services/productService";

// Thunk
export const getProductsList = createAsyncThunk(
    "products/getProductsList",
    async (_, {rejectWithValue}) => {
        try {
            const res = await fetchProductList()
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message)
        }
    }
)

export const getProductDetails = createAsyncThunk(
    "products/getProductDetails",
    async (productId, {rejectWithValue}) => {
        try {
            const res = await fetchProductDetails(productId)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message)
        }
    }
)

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: {
      loading: false,
      products: [],
      total: 0,
      currentPage: 1,
      pageSize: 16,
      searchKeyword: "",
      error: null,
    },
    productDetails: {
      loading: false,
      product: {},
      error: null,
    },
  },

  reducer: {
    setPage: (state, action) => {
      state.productList.currentPage = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.productList.searchKeyword = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.total = action.payload.total;
        state.error = null;
      })
  },
});

export default productsSlice.reducer;
