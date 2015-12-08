import React from 'react'

import { text, title } from './shared/typography'
import { hello } from './hello.css'
import btn from './shared/button'

const Hello = React.createClass({
  render() {
    return (
      <div className={ hello }>
        <h2 className={ title }>
          Hello New React App.
        </h2>
        <p className={ text }>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button className={ btn.normal } role="button">
          This is a normal button
        </button>

        <button className={ btn.primary } role="button">
          This is a primary button
        </button>

        <button className={ btn.danger } role="button">
          This is an error button
        </button>
      </div>
    )
  }
})

export default Hello
