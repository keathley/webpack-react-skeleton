'use strict'

var React = require('react')
  , Router = require('react-router')

import { routes } from './routes'

require('./styles/index.css')

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.body)
})
