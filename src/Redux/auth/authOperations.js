import * as fetch from 'Utils/Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const user = await fetch.register(credentials);
      console.log(user);
      return user;
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const user = await fetch.login(credentials);
      console.log(user);
      return user;
    } catch (err) {
      console.log(err);
      thunkAPI.rejectWithValue(err);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await fetch.logOut();
  } catch (err) {
    thunkAPI.rejectWithValue(err);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      fetch.setAuthHeader(persistedToken);
      const res = await fetch.refreshUser();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
