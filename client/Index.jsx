import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Redux Store
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';

// Components
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
