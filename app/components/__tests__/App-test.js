import React, { render } from 'react/addons'
import expect from 'expect'
import App from '../App'
import Router from 'react-router'
import TestLocation from 'react-router/lib/locations/TestLocation'

var { renderIntoDocument } = React.addons.TestUtils

describe('app', () => {
  it('renders', () => {
    TestLocation.history = ['/']
    var div = document.createElement('div')
    Router.run(routes, TestLocation, (App) => {
      React.render(<App />, div, () => {
        expect( div ).toExist
        expect( div.textContent.trim() ).toEqual('NEW APP')
      })
    })
    expect( app ).toExist()
  })
})
