import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import Terminal from '@/components/Terminal'

describe('Terminal Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  it('should render terminal structure', () => {
    render(<Terminal />)
    expect(screen.getByText('portfolio.tsx')).toBeInTheDocument()
  })

  it('should start typing process', async () => {
    render(<Terminal />)

    await act(async () => {
      vi.advanceTimersByTime(100)
    })

    const terminalBody = screen.getByText('portfolio.tsx').closest('div')?.parentElement?.lastChild
    expect(terminalBody?.textContent).toContain('c')
  })

  it('should show the blinking cursor', () => {
    const { container } = render(<Terminal />)
    const cursor = container.querySelector('.animate-pulse')
    expect(cursor).toBeInTheDocument()
  })
})
