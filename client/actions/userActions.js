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

const loginFailure = (error) => ({
  type: SET_USER_MESSAGE,
  payload: error,
});

const signUpFailure = (error) => ({
  type: SET_USER_MESSAGE,
  payload: error,
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
    dispatch(loginFailure('Email or password is incorrect'));
  } else {
    const user = await response.json();
    dispatch(setUser(user));
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
    dispatch(signUpFailure('Passwords do not match'));
  }

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

  if (response.ok) {
    const data = await response.json();
    dispatch();
  } else {
    dispatch(signUpFailure('Something went wrong, please try again'));
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
  signUpUser,
  clearMessage,
};
