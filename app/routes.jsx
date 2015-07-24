import React from 'react'
import Router from 'react-router'

import App from './components/App'
import Hello from './components/Hello'

export var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.DefaultRoute handler={Hello} />
  </Router.Route>
)
