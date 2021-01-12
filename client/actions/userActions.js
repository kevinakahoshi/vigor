import {
  SET_USER,
  GET_USER,
  LOG_OUT,
  LOGIN_FAILURE,
  CLEAR_ERROR,
} from '../types';

import loadingActions from './loadingActions';

const { isLoading, isNotLoading } = loadingActions;

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const getUser = () => async (dispatch) => {
  const response = await fetch('/api/users/get-user');
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
  type: LOGIN_FAILURE,
  payload: error,
});

const logInUser = ({ email, password }) => async (dispatch, getState) => {
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

  const response = await fetch('/api/users/login', options);

  dispatch(isNotLoading());

  if (!response.ok) {
    dispatch(loginFailure('Email or password is incorrect'));
  } else {
    const user = await response.json();
    dispatch(setUser(user));
  }
};

const logOut = () => ({
  type: LOG_OUT,
});

const clearError = () => ({
  type: CLEAR_ERROR,
});

export default {
  getUser,
  setUser,
  logInUser,
  logOut,
  clearError,
};
