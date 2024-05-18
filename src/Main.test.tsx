import { render, screen } from '@testing-library/react'
import Main from './Main'
describe('test DocumentComponent', () => {
  test('render Component', () => {
    render(<Main />)
    screen.getAllByText('nav')
  })
})
