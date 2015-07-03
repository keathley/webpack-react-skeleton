var React = require('react')
  , Router = require('react-router')

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
