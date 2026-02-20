import { render } from '@testing-library/react'
import App from '../src/App'

describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />)
  })
})
