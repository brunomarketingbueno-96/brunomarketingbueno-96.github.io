import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Skeleton from '@/components/Skeleton'

describe('Skeleton Component', () => {
  it('should render the skeleton container', () => {
    const { container } = render(<Skeleton />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toBeInTheDocument()
  })

  it('should apply the animate-pulse class for the loading effect', () => {
    const { container } = render(<Skeleton />)
    const wrapper = container.firstChild as HTMLElement

    expect(wrapper).toHaveClass('animate-pulse', 'flex', 'flex-col', 'shadow-sm')
  })

  it('should render the correct internal structure placeholders', () => {
    const { container } = render(<Skeleton />)
    const wrapper = container.firstChild as HTMLElement

    expect(wrapper.children).toHaveLength(2)

    const imagePlaceholder = wrapper.children[0]
    expect(imagePlaceholder).toHaveClass('h-48')

    const contentWrapper = wrapper.children[1]
    expect(contentWrapper).toHaveClass('p-6')
    expect(contentWrapper.children).toHaveLength(4)
  })
})
