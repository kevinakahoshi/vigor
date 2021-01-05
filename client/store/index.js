import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ReduxThunk];

const initialState = {
  currentUser: {
    loggedIn: false,
    user: {},
    error: null,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
