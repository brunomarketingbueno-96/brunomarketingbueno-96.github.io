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

})