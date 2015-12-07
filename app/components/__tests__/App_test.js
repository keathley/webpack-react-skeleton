import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from '../App'

describe('App', () => {
  it('renders', () => {
    const component = shallow(<App />)
    expect(component.find('h1').text()).to.equal("Test Application")
  })
})
