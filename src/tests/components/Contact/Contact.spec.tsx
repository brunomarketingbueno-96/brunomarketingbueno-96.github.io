import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Contact from '@/components/Contact'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'contact.title': 'Contact Me'
      }
      return translations[key] || key
    }
  })
}))

vi.mock('@/components/Form', () => ({
  default: () => <form data-testid="mock-form" />
}))

describe('Contact Component', () => {
  it('should render the section with the correct id', () => {
    const { container } = render(<Contact />)
    const section = container.querySelector('#contact')
    expect(section).toBeInTheDocument()
  })

  it('should render the translated title', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()
  })

  it('should render the Form component', () => {
    render(<Contact />)
    expect(screen.getByTestId('mock-form')).toBeInTheDocument()
  })

  it('should apply the required layout and styling classes to the form container', () => {
    const { container } = render(<Contact />)
    const formContainer = container.querySelector('#contact > div:last-child')

    expect(formContainer).toHaveClass(
      'w-full',
      'bg-white',
      'dark:bg-zinc-950',
      'rounded-2xl',
      'shadow-sm',
      'border'
    )
  })
})
