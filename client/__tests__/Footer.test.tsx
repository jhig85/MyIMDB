import Footer from '../src/components/Footer'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import 'jest-styled-components'

describe('Footer component', () => {
  it('renders the logo and navigation links', () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    // Check if the logo is rendered
    const logo = getByAltText('Higgy"s Movie Database')
    expect(logo).toBeInTheDocument()

    // Check if navigation links are rendered
    const homeLink = getByText('Home')
    const tvShowsLink = getByText('TV Shows')
    const actorsLink = getByText('Actors')
    const aboutLink = getByText('About')

    expect(homeLink).toBeInTheDocument()
    expect(tvShowsLink).toBeInTheDocument()
    expect(actorsLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
  })
})
