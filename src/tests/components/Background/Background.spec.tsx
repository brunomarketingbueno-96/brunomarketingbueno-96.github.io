import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Background from '@/components/Background'

describe('Background Component', () => {
  it('should render correctly with initial position', () => {
    const { container } = render(<Background />)
    const gradients = container.querySelectorAll('div[style*="radial-gradient"]')

    gradients.forEach(gradient => {
      const htmlElement = gradient as HTMLElement
      expect(htmlElement.style.background).toContain('0px 0px')
    })
  })

  it('should update background style when mouse moves', () => {
    const { container } = render(<Background />)

    fireEvent.mouseMove(window, {
      clientX: 500,
      clientY: 300
    })

    const gradients = container.querySelectorAll('div[style*="radial-gradient"]')

    gradients.forEach(gradient => {
      const htmlElement = gradient as HTMLElement
      expect(htmlElement.style.background).toContain('500px 300px')
    })
  })

  it('should cleanup event listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Background />)

    unmount()

    expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
    removeSpy.mockRestore()
  })

  it('should have correct structural classes for dark and light mode', () => {
    const { container } = render(<Background />)
    const mainDiv = container.firstChild as HTMLElement

    expect(mainDiv).toHaveClass('fixed', 'inset-0', '-z-10')
    expect(container.querySelector('.dark\\:hidden')).toBeInTheDocument()
    expect(container.querySelector('.hidden.dark\\:block')).toBeInTheDocument()
  })
})
