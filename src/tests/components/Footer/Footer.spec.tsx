import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'

import Footer from '@/components/Footer'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      if (key === 'footer.rights') {
        return `© ${options?.year} All rights reserved`
      }
      return key
    }
  })
}))

describe('Footer Component', () => {
  beforeAll(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2024, 0, 1))
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('should render the footer HTML element', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')

    expect(footer).toBeInTheDocument()
  })
})
