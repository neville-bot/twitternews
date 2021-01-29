import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import App from './app'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider >
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
