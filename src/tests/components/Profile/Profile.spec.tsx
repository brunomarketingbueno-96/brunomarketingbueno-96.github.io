import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Profile from '@/components/Profile'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      const translations: Record<string, string> = {
        'about.name': options?.defaultValue || 'Willian D. Daniel',
        'about.nacionality': 'Brazilian',
        'about.labels.age': 'Age',
        'about.age': `${options?.year || 0} years`,
        'about.labels.location': 'Location',
        'about.location': 'Cachoeirinha, RS, Brazil',
        'about.labels.cursing': 'Studying',
        'about.university': 'Systems Analysis and Development'
      }
      return translations[key] || key
    }
  })
}))

vi.mock('@/helpers/calculateAge', () => ({
  calculateAge: vi.fn(() => 34)
}))

describe('Profile Component', () => {
  it('should render the profile image correctly', () => {
    render(<Profile />)
    const avatar = screen.getByAltText('Willian D. Daniel')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('src', 'https://github.com/willianddaniel.png')
  })

  it('should render the translated name and nationality flag', () => {
    render(<Profile />)
    expect(screen.getByText('Willian D. Daniel')).toBeInTheDocument()
    expect(screen.getByText('Brazilian')).toBeInTheDocument()

    const flag = screen.getByAltText('Brazil Flag')
    expect(flag).toBeInTheDocument()
    expect(flag).toHaveAttribute('src', '/brazil-country-flag.png')
  })

  it('should render age info with the mocked calculated age', () => {
    render(<Profile />)
    expect(screen.getByText('Age')).toBeInTheDocument()
    expect(screen.getByText('34 years')).toBeInTheDocument()
  })

  it('should render location and university details', () => {
    render(<Profile />)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Cachoeirinha, RS, Brazil')).toBeInTheDocument()
    expect(screen.getByText('Studying')).toBeInTheDocument()
    expect(screen.getByText('Systems Analysis and Development')).toBeInTheDocument()
  })

  it('should apply correct responsive and layout classes', () => {
    const { container } = render(<Profile />)
    const wrapper = container.firstChild as HTMLElement

    expect(wrapper).toHaveClass('relative', 'w-full', 'md:w-4/12', 'flex', 'flex-col', 'items-center')
  })
})
