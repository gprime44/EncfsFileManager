import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'

import './index.css'

import App from './componants/App'
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker'

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))

registerServiceWorker()
