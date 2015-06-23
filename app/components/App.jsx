var React = require('react')
  , Router = require('react-router')

require('App.scss');

var App = React.createClass({
  render() {
    return (
      <main className="app">
        <h1>NEW APP</h1>
        <Router.RouteHandler {...this.props} />
      </main>
    );
  }
});

module.exports = App;
