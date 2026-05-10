import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import EducationInfo from '@/components/EducationInfo'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'educations.Educations.types.COURSE': 'Course',
        'educations.readMore': 'Read More',
        'educations.date.present': 'Present',
        'educations.viewCertificate': 'View Certificate'
      }
      return translations[key] || key
    },
    i18n: {
      language: 'en'
    }
  })
}))

describe('EducationInfo Component', () => {
  const baseEducation = {
    id: 'edu-1',
    type: 'COURSE',
    startDate: '2023-01-15T00:00:00.000Z',
    endDate: '2023-06-20T00:00:00.000Z',
    translations: [
      {
        language: 'en',
        institution: 'Tech Academy',
        name: 'Advanced React Patterns',
        description: 'A deep dive into advanced React concepts.'
      }
    ]
  }

  it('should render nothing if no valid translation is found', () => {
    const invalidEdu = { ...baseEducation, translations: [{ language: 'fr', institution: '', name: '', description: '' }] }
    const { container } = render(<EducationInfo currentEdu={invalidEdu as any} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('should render basic education information correctly', () => {
    render(<EducationInfo currentEdu={baseEducation as any} />)

    expect(screen.getByText('Tech Academy')).toBeInTheDocument()
    expect(screen.getByText('Course')).toBeInTheDocument()
    expect(screen.getByText('Advanced React Patterns')).toBeInTheDocument()
    expect(screen.getByText('A deep dive into advanced React concepts.')).toBeInTheDocument()

    expect(screen.getByText(/2023/)).toBeInTheDocument()
  })

  it('should format date with Present when endDate is missing', () => {
    const ongoingEdu = { ...baseEducation, endDate: undefined }
    render(<EducationInfo currentEdu={ongoingEdu as any} />)

    expect(screen.getByText(/Present/)).toBeInTheDocument()
  })

  it('should render duration and certificate link if provided', () => {
    const fullEdu = { ...baseEducation, durationHours: 40, certificateUrl: 'https://cert.com' }
    render(<EducationInfo currentEdu={fullEdu as any} />)

    expect(screen.getByText('40h')).toBeInTheDocument()

    const certLink = screen.getByText('View Certificate')
    expect(certLink).toBeInTheDocument()
    expect(certLink).toHaveAttribute('href', 'https://cert.com')
  })

  it('should omit duration and certificate link if not provided', () => {
    render(<EducationInfo currentEdu={baseEducation as any} />)

    expect(screen.queryByText(/h$/)).not.toBeInTheDocument()
    expect(screen.queryByText('View Certificate')).not.toBeInTheDocument()
  })

  it('should expand description when clicking read more', () => {
    render(<EducationInfo currentEdu={baseEducation as any} />)

    const description = screen.getByText('A deep dive into advanced React concepts.')
    expect(description).toHaveClass('line-clamp-3')

    const readMoreBtn = screen.getByText('Read More')
    fireEvent.click(readMoreBtn)

    expect(description).toHaveClass('max-h-28')
    expect(screen.queryByText('Read More')).not.toBeInTheDocument()
  })
})
