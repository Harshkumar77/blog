import { render } from '@redwoodjs/testing/web'

import MainRoutesLayout from './MainRoutesLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MainRoutesLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainRoutesLayout />)
    }).not.toThrow()
  })
})
