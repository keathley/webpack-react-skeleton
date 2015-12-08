import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Hello from './components/Hello'

export const routes = (
  <Route component={App}>
    <Route path="/" component={Hello} />
  </Route>
)
