import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Hello from '../Hello'

describe('Hello Component', () => {
  let component

  beforeEach(() => {
    component = shallow(<Hello />)
  })

  it('has some initial text', () => {
    const text = component.find('h2').text()
    expect(text).to.equal('Hello New React App.')
  })
})
