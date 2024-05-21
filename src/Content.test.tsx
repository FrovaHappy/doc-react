import { render, screen, waitFor } from '@testing-library/react'
import Content from './Content'
import articles from './mocks/articles'

describe('Test Content', () => {
  const section = articles[0].sections[0]
  test('loading md component', async () => {
    render(<Content section={section} />)
    const loading = await waitFor(() => screen.getAllByText('Hello World'))
    expect(loading.length).toBe(1)
    expect(loading[0].innerHTML).toBe('Hello World')
  })
  test('error with invalid url', async () => {
    section.url = ''
    render(<Content section={section} />)
    const loading = await waitFor(() => screen.getByText('fetch: File not found'))
    expect(loading.innerHTML).toBe('fetch: File not found')
  })
})
