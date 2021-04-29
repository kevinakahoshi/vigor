import initialState from '../store/initialState';

const currentUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_FETCHING':
      return {
        ...state,
        fetching: payload,
      };
    case 'SET_USER':
      return {
        ...state,
        user: payload,
        loggedIn: true,
        message: null,
        fetching: false,
      };
    case 'GET_USER':
      return {
        ...state,
        fetching: false,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        message: payload,
      };
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        message: payload,
      };
    case 'SET_USER_MESSAGE':
      return {
        ...state,
        message: payload.message,
        success: payload.success,
      };
    case 'CLEAR_USER_MESSAGE':
      return {
        ...state,
        message: null,
        success: null,
      };
    default:
      return state;
  }
};

export default currentUser;
