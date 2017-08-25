import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './index.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './componants/App'
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker'

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))

registerServiceWorker()
