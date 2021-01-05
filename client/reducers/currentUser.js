const currentUser = (
  state = {
    loggedIn: false,
    user: {},
  },
  action
) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action);
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
