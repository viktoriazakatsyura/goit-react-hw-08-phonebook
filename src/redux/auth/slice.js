import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  registration,
  login,
  logout,
  fetchCurrentUser,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoggedIn = false;
        state.isError = false;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registration.rejected, (state) => {
        state.isLoggedIn = false;
        state.isError = true;
        state.errorMessage = 'This email is already used';
      })
      .addCase(login.pending, (state) => {
        state.isLoggedIn = false;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
        state.isError = true;
        state.errorMessage = 'Wrong email or password';
      })
      .addCase(logout.pending, (state) => {
        state.isLoggedIn = false;
        state.isError = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoggedIn = false;
        state.isError = true;
        state.errorMessage = 'Something went wrong';
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      });
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
