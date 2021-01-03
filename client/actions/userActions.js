import { createAsyncThunk } from '@reduxjs/toolkit';
import { SET_USER, GET_USER, LOG_OUT } from '../types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const logInUser = createAsyncThunk(GET_USER, async () => {
  const response = await fetch('/api/users/get-user');
  // const user = await response.json();
  return response;
});

const logOut = () => ({
  type: LOG_OUT,
});

export default {
  setUser,
  logInUser,
  logOut,
};
