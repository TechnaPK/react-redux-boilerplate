import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './config/store'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

// Important Configurations Requirement
// Global Configuration files must be imported first before any other file
require( './config/global' )
require( './config/axios' )
// require( './config/firebase' )
require( './config/fontawesome' )

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)


registerServiceWorker();