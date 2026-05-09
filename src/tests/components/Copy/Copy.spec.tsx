import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Copy from '@/components/Copy'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'hero.availability': 'Available for projects',
        'hero.description': 'Full-stack Developer',
        'hero.descriptionHighlight': 'Building modern web apps',
        'hero.subtext': 'Experience in React and Node.',
        'hero.cta-button-cv': 'Download CV',
        'hero.cta-button-projects': 'View Projects'
      }
      return translations[key] || key
    }
  })
}))

describe('Copy Component', () => {
  it('should render translated texts correctly', () => {
    render(<Copy />)

    expect(screen.getByText('Available for projects')).toBeInTheDocument()
    expect(screen.getByText('Full-stack Developer')).toBeInTheDocument()
    expect(screen.getByText('Building modern web apps')).toBeInTheDocument()
    expect(screen.getByText('Experience in React and Node.')).toBeInTheDocument()
  })

  it('should render buttons with correct labels and attributes', () => {
    render(<Copy />)

    const cvButton = screen.getByRole('button', { name: /download cv/i })
    const projectsLink = screen.getByRole('link', { name: /view projects/i })

    expect(cvButton).toBeInTheDocument()
    expect(projectsLink).toHaveAttribute('href', '#projects')
  })

  it('should contain the animated availability indicator', () => {
    const { container } = render(<Copy />)
    const dot = container.querySelector('.bg-emerald-500.animate-pulse')

    expect(dot).toBeInTheDocument()
    expect(dot).toHaveClass('rounded-full', 'h-2', 'w-2')
  })

  it('should have correct responsive layout classes', () => {
    const { container } = render(<Copy />)
    const wrapper = container.firstChild as HTMLElement

    expect(wrapper).toHaveClass('flex', 'flex-col', 'items-start')
  })
})
