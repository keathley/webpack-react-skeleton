import React, { render } from 'react/addons'
import expect from 'expect'
import App from '../App'
import Router from 'react-router'
import { routes } from '../../routes'

var { renderIntoDocument } = React.addons.TestUtils
  , TestLocation = Router.TestLocation

describe('app', () => {
  it('renders', () => {
    var location = new TestLocation(['/'])
    var div = document.createElement('div')

    Router.run(routes, location, (App) => {
      React.render(<App />, div, () => {
        expect( div ).toExist
        expect( div.textContent.trim() ).toContain('NEW APP')
      })
    })
  })
})
