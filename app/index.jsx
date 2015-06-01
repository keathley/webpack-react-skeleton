var React = require('react')
  , Router = require('react-router');

var Hello = require('./components/Hello.jsx');

require('./styles/index.scss');

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

var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.DefaultRoute handler={Hello} />
  </Router.Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.body);
});
