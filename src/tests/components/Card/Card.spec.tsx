import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Card from '@/components/Card'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'projects.readMore': 'Read More',
        'projects.showLess': 'Show Less',
        'projects.viewProject': 'View Project',
        'projects.code': 'Code'
      }
      return translations[key] || key
    },
    i18n: {
      language: 'en'
    }
  })
}))

describe('Card Component', () => {
  const baseProject = {
    id: '1',
    imageUrl: '/test-image.jpg',
    translations: [
      {
        language: 'en',
        title: 'Test Project',
        description: 'This is a short description.'
      }
    ]
  }

  it('should render nothing if no valid translation is found', () => {
    const invalidProject = { ...baseProject, translations: [{ language: 'fr', title: 'FR', description: 'FR' }] }
    const { container } = render(<Card project={invalidProject as any} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('should render basic project information correctly', () => {
    render(<Card project={baseProject as any} />)

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a short description.')).toBeInTheDocument()

    const image = screen.getByAltText('Test Project')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test-image.jpg')
  })

  it('should handle long descriptions with read more/show less toggle', () => {
    const longDescription = 'A'.repeat(200)
    const projectWithLongText = {
      ...baseProject,
      translations: [{ language: 'en', title: 'Long Text', description: longDescription }]
    }

    render(<Card project={projectWithLongText as any} />)

    const truncatedTextPart = 'A'.repeat(190) + '...'
    expect(screen.getByText((content) => content.includes(truncatedTextPart))).toBeInTheDocument()

    const toggleButton = screen.getByText('Read More')
    expect(toggleButton).toBeInTheDocument()

    fireEvent.click(toggleButton)

    expect(screen.getByText((content) => content.includes(longDescription))).toBeInTheDocument()
    expect(screen.getByText('Show Less')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Show Less'))
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })

  it('should display GitHub stats if provided', () => {
    const projectWithStats = {
      ...baseProject,
      githubStats: {
        stars: 42,
        languages: ['TypeScript', 'React', 'Tailwind', 'HTML']
      }
    }

    render(<Card project={projectWithStats as any} />)

    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Tailwind')).toBeInTheDocument()

    expect(screen.queryByText('HTML')).not.toBeInTheDocument()
    expect(screen.getByText('+')).toBeInTheDocument()
  })

  it('should render action links when urls are provided', () => {
    const projectWithLinks = {
      ...baseProject,
      liveUrl: 'https://live-site.com',
      repoUrl: 'https://github.com/repo'
    }

    render(<Card project={projectWithLinks as any} />)

    const liveLink = screen.getByText('View Project')
    expect(liveLink).toBeInTheDocument()
    expect(liveLink).toHaveAttribute('href', 'https://live-site.com')

    const repoLink = screen.getByText('Code')
    expect(repoLink).toBeInTheDocument()
    expect(repoLink).toHaveAttribute('href', 'https://github.com/repo')
  })

  it('should not render action links if urls are missing or empty', () => {
    const projectWithoutLinks = {
      ...baseProject,
      liveUrl: null,
      repoUrl: ''
    }

    render(<Card project={projectWithoutLinks as any} />)

    expect(screen.queryByText('View Project')).not.toBeInTheDocument()
    expect(screen.queryByText('Code')).not.toBeInTheDocument()
  })
})
