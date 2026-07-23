import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import About from '@/components/About'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'about.title': 'About Me'
      }
      return translations[key] || key
    }
  })
}))

vi.mock('@/components/Profile', () => ({
  default: () => <div data-testid="profile" />
}))

vi.mock('@/components/Bio', () => ({
  default: () => <div data-testid="bio" />
}))

describe('About Component', () => {
  it('should render the section with the correct id', () => {
    const { container } = render(<About />)
    const section = container.querySelector('#about')
    expect(section).toBeInTheDocument()
  })

})
