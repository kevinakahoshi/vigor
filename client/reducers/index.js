import { combineReducers } from 'redux';

import currentUser from './currentUser';
import loadingState from './loadingState';

const rootReducer = combineReducers({
  currentUser,
  loadingState,
});

export default rootReducer;
