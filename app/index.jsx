'use strict'

var React = require('react')
  , Router = require('react-router')

var App = require('./components/App')
  , Hello = require('./components/Hello')

require('./styles/index.css')

var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.DefaultRoute handler={Hello} />
  </Router.Route>
)

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.body)
})
