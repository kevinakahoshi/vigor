import {
  SET_USER,
  GET_USER,
  LOG_OUT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../types';

const getUser = () => async (dispatch) => {
  const response = await fetch('/api/users/get-user');
  if (!response.ok) return;
  const user = await response.json();
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// const loginSuccess = (user) => ({
//   type: LOGIN_SUCCESS,
//   payload: user,
// });

// const loginFailure = (error) => ({
//   type: LOGIN_FAILURE,
//   error,
// });

const logInUser = () => async (dispatch) => {
  const response = await fetch('/api/users/get-user');
  if (!response.ok) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: 'User credentials are bad',
    });
  } else {
    const user = await response.json();
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  }
};

const logOut = () => ({
  type: LOG_OUT,
});

export default {
  setUser,
  logInUser,
  logOut,
};
