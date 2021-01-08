import initialState from '../store/initialState';

const currentUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        user: payload,
        loggedIn: true,
        error: null,
      };
    case 'GET_USER':
      return {
        ...state,
        user: payload,
        loggedIn: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    case 'FAILED_FETCH':
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default currentUser;
