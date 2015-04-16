webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1),
	    Router = __webpack_require__(2);
	
	var Hello = __webpack_require__(24);
	
	__webpack_require__(25);
	
	var App = React.createClass({
	  displayName: 'App',
	
	  render: function render() {
	    return React.createElement(
	      'main',
	      { className: 'app' },
	      React.createElement(
	        'h1',
	        null,
	        'NEW APP'
	      ),
	      React.createElement(Router.RouteHandler, this.props)
	    );
	  }
	});
	
	var routes = React.createElement(
	  Router.Route,
	  { name: 'app', path: '/', handler: App },
	  React.createElement(Router.DefaultRoute, { handler: Hello })
	);
	
	Router.run(routes, Router.HistoryLocation, function (Handler, state) {
	  React.render(React.createElement(Handler, null), document.body);
	});

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var Hello = React.createClass({
	  displayName: 'Hello',
	
	  render: function render() {
	    return React.createElement(
	      'h1',
	      null,
	      'Hello New React App'
	    );
	  }
	});
	
	module.exports = Hello;

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlbGxvLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEtBQUksS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDO0tBQ3hCLE1BQU0sR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQzs7QUFFcEMsS0FBSSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxFQUF3QixDQUFDOztBQUU3QyxvQkFBTyxDQUFDLEVBQXFCLENBQUM7O0FBRTlCLEtBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMxQixTQUFNLG9CQUFHO0FBQ1AsWUFDRTs7U0FBTSxTQUFTLEVBQUMsS0FBSztPQUNuQjs7OztRQUFnQjtPQUNoQixvQkFBQyxNQUFNLENBQUMsWUFBWSxFQUFLLElBQUksQ0FBQyxLQUFLLENBQUk7TUFDbEMsQ0FDUjtJQUNGO0VBQ0YsQ0FBQyxDQUFDOztBQUVILEtBQUksTUFBTSxHQUNSO0FBQUMsU0FBTSxDQUFDLEtBQUs7S0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLEdBQUk7R0FDN0Msb0JBQUMsTUFBTSxDQUFDLFlBQVksSUFBQyxPQUFPLEVBQUUsS0FBTSxHQUFHO0VBRTFDLENBQUM7O0FBRUYsT0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxVQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUs7QUFDN0QsUUFBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxPQUFPLE9BQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDekMsQ0FBQyxDOzs7Ozs7Ozs7QUMxQkYsS0FBSSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQzs7QUFFN0IsS0FBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzVCLFNBQU0sRUFBRSxrQkFBVztBQUNqQixZQUNFOzs7O01BQTRCLENBQzVCO0lBQ0g7RUFDRixDQUFDLENBQUM7O0FBRUgsT0FBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEM7Ozs7Ozs7QUNWdEIsMEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuICAsIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpXG5cbnZhciBIZWxsbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9IZWxsby5qc3gnKVxuXG5yZXF1aXJlKCcuL3N0eWxlcy9pbmRleC5zY3NzJylcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPGgxPk5FVyBBUFA8L2gxPlxuICAgICAgICA8Um91dGVyLlJvdXRlSGFuZGxlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn0pO1xuXG52YXIgcm91dGVzID0gKFxuICA8Um91dGVyLlJvdXRlIG5hbWU9XCJhcHBcIiBwYXRoPVwiL1wiIGhhbmRsZXI9e0FwcH0+XG4gICAgPFJvdXRlci5EZWZhdWx0Um91dGUgaGFuZGxlcj17SGVsbG99IC8+XG4gIDwvUm91dGVyLlJvdXRlPlxuKTtcblxuUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IaXN0b3J5TG9jYXRpb24sIChIYW5kbGVyLCBzdGF0ZSkgPT4ge1xuICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIvPiwgZG9jdW1lbnQuYm9keSk7XG59KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2luZGV4LmpzeFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBIZWxsbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgxPkhlbGxvIE5ldyBSZWFjdCBBcHA8L2gxPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhlbGxvO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSGVsbG8uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL3N0eWxlcy9pbmRleC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=