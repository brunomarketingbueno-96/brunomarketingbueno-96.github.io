import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Hero from '@/components/Hero'

vi.mock('@/components/Background', () => ({
  default: () => <div data-testid="background" />
}))
vi.mock('@/components/Terminal', () => ({
  default: () => <div data-testid="terminal" />
}))
vi.mock('@/components/Copy', () => ({
  default: () => <div data-testid="copy" />
}))

describe('Hero Component', () => {
  it('should render the section with the correct id', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('#hero')
    expect(section).toBeInTheDocument()
  })

  it('should render all child components', () => {
    render(<Hero />)

    expect(screen.getByTestId('background')).toBeInTheDocument()
    expect(screen.getByTestId('copy')).toBeInTheDocument()
    expect(screen.getByTestId('terminal')).toBeInTheDocument()
  })

  it('should have the required layout classes', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('#hero')

    expect(section).toHaveClass('flex')
    expect(section).toHaveClass('relative')
    expect(section).toHaveClass('flex-col')
  })

  it('should maintain accessibility and visibility constraints', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('#hero')
    expect(section).toHaveClass('min-h-[calc(100vh-3.5rem)]')
  })
})