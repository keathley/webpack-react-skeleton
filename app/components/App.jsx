import React from 'react'

import { app } from './app.css'
import { mastHead } from './shared/typography'

const App = React.createClass({
  render() {
    return (
      <main className={ app }>
        <h1 className={ mastHead }>Test Application</h1>
        {this.props.children}
      </main>
    );
  }
});

export default App
