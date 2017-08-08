import React from 'react';
import { render } from 'react-dom'
import { RouterProvider } from 'redux-little-router'
import { Provider } from 'react-redux'

import './index.css';
import App from './componants/App';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';


render(
  <Provider store={store}>
    <RouterProvider store={store}>
      <App />
    </RouterProvider>
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker();
