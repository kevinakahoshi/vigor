import {
  SET_USER,
  GET_USER,
  LOG_OUT,
  SET_USER_MESSAGE,
  CLEAR_USER_MESSAGE,
} from '../types';
import { API_GET_USER, API_LOGIN } from '../utilities/fetch/paths';

import loadingActions from './loadingActions';

const { isLoading, isNotLoading } = loadingActions;

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const getUser = () => async (dispatch) => {
  const response = await fetch(API_GET_USER);
  if (!response.ok) {
    dispatch({
      type: GET_USER,
    });
  } else {
    const user = await response.json();
    dispatch(setUser(user));
  }
};

const setUserMessage = (message, success) => ({
  type: SET_USER_MESSAGE,
  payload: {
    message,
    success,
  },
});

const clearMessage = () => ({
  type: CLEAR_USER_MESSAGE,
});

const logInUser = ({ email, password }) => async (dispatch) => {
  dispatch(isLoading());

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const response = await fetch(API_LOGIN, options);

  dispatch(isNotLoading());

  if (!response.ok) {
    dispatch(setUserMessage('Email or password is incorrect', false));
  } else {
    const user = await response.json();
    dispatch(setUser(user));
    dispatch(setUserMessage('Logged in successfully', true));
  }
};

const signUpUser = ({
  firstName,
  lastName,
  email,
  password,
  reEnteredPassword,
}) => async (dispatch) => {
  if (password !== reEnteredPassword) {
    dispatch(setUserMessage('Passwords do not match', false));
  }

  dispatch(isLoading());

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  };

  const response = await fetch('/api/users/create-user', options);

  dispatch(isNotLoading());

  if (response.ok) {
    const data = await response.json();
    dispatch(setUserMessage(data, true));
  } else {
    dispatch(setUserMessage('Something went wrong, please try again', false));
  }
};

const logOut = () => ({
  type: LOG_OUT,
});

export default {
  getUser,
  setUser,
  logInUser,
  logOut,
  setUserMessage,
  signUpUser,
  clearMessage,
};
