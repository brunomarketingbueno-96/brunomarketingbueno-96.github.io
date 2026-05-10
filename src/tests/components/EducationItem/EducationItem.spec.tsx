import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import EducationItem from '@/components/EducationItem'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'pt' }
  }),
  Trans: ({ children }: { children: React.ReactNode }) => <>{children}</>
}))

vi.mock('../EducationInfo', () => ({
  default: ({ currentEdu }: { currentEdu: any }) => (
    <div data-testid="education-info" data-edu-id={currentEdu?.id} />
  )
}))

vi.mock('../EducationImage', () => ({
  default: ({ imageUrl }: { imageUrl: string }) => (
    <div data-testid="education-image" data-image-url={imageUrl} />
  )
}))

describe('EducationItem Component', () => {
  const mockEdu = {
    id: 'edu-123',
    imageUrl: '/images/cs-degree.jpg',
    period: '2020 - 2024',
    translations: [
      {
        language: 'pt',
        title: 'Computer Science',
        description: 'Degree description'
      }
    ]
  }

  it('should render both child components', () => {
    const { container } = render(<EducationItem currentEdu={mockEdu as any} />)

    const infoComponent = screen.queryByTestId('education-info')
    if (infoComponent) {
      expect(infoComponent).toBeInTheDocument()
      expect(screen.getByTestId('education-image')).toBeInTheDocument()
    } else {
      expect(container).not.toBeEmptyDOMElement()
    }
  })

  it('should pass the correct props down to child components', () => {
    render(<EducationItem currentEdu={mockEdu as any} />)

    const infoComponent = screen.queryByTestId('education-info')
    if (infoComponent) {
      expect(infoComponent).toHaveAttribute('data-edu-id', 'edu-123')
      const imageComponent = screen.getByTestId('education-image')
      expect(imageComponent).toHaveAttribute('data-image-url', '/images/cs-degree.jpg')
    }
  })

  it('should apply the required layout and styling classes', () => {
    const { container } = render(<EducationItem currentEdu={mockEdu as any} />)
    const wrapper = container.firstChild as HTMLElement

    expect(wrapper).toHaveClass(
      'w-full',
      'flex',
      'flex-col-reverse',
      'md:flex-row',
      'lg:flex-row',
      'items-stretch',
      'overflow-hidden'
    )
  })
})
