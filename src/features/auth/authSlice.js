import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/authService";
import { getUserDetails as getUserDetailsAPI } from "./../../services/userService";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Thunk
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await login(userData);
      localStorage.setItem("userInfo", JSON.stringify(res.data));

      if (res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getUserDetailsAPI();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: userInfoFromStorage, loading: false, error: null },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        .addCase(getUserDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(getUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
  }
});

export const { logoutUser } = authSlice.actions;
export const selectUser = (state) => state.user.user
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;

export default authSlice.reducer;
