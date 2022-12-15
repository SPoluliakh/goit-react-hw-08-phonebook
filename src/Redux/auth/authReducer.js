import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload?.user;
        state.token = action.payload?.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logIn.pending, (state, _) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload?.user;
        state.token = action.payload?.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;

        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.isRefreshing = false;
      }),
});
