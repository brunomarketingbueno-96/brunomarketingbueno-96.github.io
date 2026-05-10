import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Bio from '@/components/Bio'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'about.bio.title': 'My Biography',
        'about.bio.paragraph1': 'This is the first paragraph of the biography.',
        'about.bio.paragraph2': 'This is the second paragraph of the biography.'
      }
      return translations[key] || key
    }
  }),
  Trans: ({ children }: { children: React.ReactNode }) => <>{children}</>
}))

describe('Bio Component', () => {
  it('should render the translated title', () => {
    render(<Bio />)
    const title = screen.getByRole('heading', { level: 3, name: 'My Biography' })
    expect(title).toBeInTheDocument()
  })

  it('should render the paragraphs with translated content', () => {
    render(<Bio />)
    expect(screen.getByText('This is the first paragraph of the biography.')).toBeInTheDocument()
    expect(screen.getByText('This is the second paragraph of the biography.')).toBeInTheDocument()
  })

  it('should have the required layout and styling classes', () => {
    const { container } = render(<Bio />)
    const wrapper = container.firstChild as HTMLElement

    expect(wrapper).toHaveClass('w-full', 'md:w-8/12', 'flex', 'flex-col', 'justify-center')
    expect(wrapper).toHaveClass('bg-zinc-50/50', 'dark:bg-zinc-900/50', 'rounded-2xl')
  })
})
