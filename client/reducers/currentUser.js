import initialState from '../store/initialState';

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        error: null,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
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
        error: action.payload,
      };
    default:
      return state;
  }
};

export default currentUser;
