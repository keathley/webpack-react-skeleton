import React, { render } from 'react/addons'
import expect from 'expect'
import Hello from '../Hello'

var { renderIntoDocument } = React.addons.TestUtils

describe('Hello Component', () => {
  var hello;
  var node;

  beforeEach(() => {
    hello = renderIntoDocument(<Hello />)
    node = hello.getDOMNode()
  })

  it('has some initial text', () => {
    expect( node.textContent ).toContain('Hello New React App')
    expect( node.textContent ).toContain('Lorem ipsum')
  })
})
