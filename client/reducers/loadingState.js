import initialState from '../store/initialState';

const loadingState = (state = initialState, { type }) => {
  switch (type) {
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'IS_NOT_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loadingState;
