import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import EducationImage from '@/components/EducationImage'

describe('EducationImage Component', () => {
  it('should render the image when imageUrl is provided', () => {
    render(<EducationImage imageUrl="/images/test-certificate.jpg" />)

    const image = screen.getByAltText('Education')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/images/test-certificate.jpg')
    expect(image).toHaveClass('animate-fade-in')
  })

  it('should render the fallback SVG icon when imageUrl is not provided', () => {
    const { container } = render(<EducationImage imageUrl="" />)

    expect(screen.queryByAltText('Education')).not.toBeInTheDocument()

    const svgIcon = container.querySelector('svg')
    expect(svgIcon).toBeInTheDocument()
  })

  it('should apply the correct layout classes to the wrapper', () => {
    const { container } = render(<EducationImage imageUrl="/images/test.jpg" />)
    const wrapper = container.firstChild as HTMLElement

    expect(wrapper).toHaveClass(
      'w-full',
      'lg:w-1/2',
      'flex',
      'border-t',
      'lg:border-t-0',
      'lg:border-l'
    )
  })
})
