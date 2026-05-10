import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import Projects from '@/components/Projects'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'menu.projects': 'My Projects'
      }
      return translations[key] || key
    }
  })
}))

vi.mock('@/components/Card', () => ({
  default: ({ project }: { project: { id: string; title: string } }) => (
    <div data-testid={`project-card-${project.id}`}>{project.title}</div>
  )
}))

vi.mock('@/components/Skeleton', () => ({
  default: () => <div data-testid="skeleton-card" />
}))

describe('Projects Component', () => {
  const mockProjects = [
    { id: '1', title: 'Project Alpha' },
    { id: '2', title: 'Project Beta' }
  ]

  beforeEach(() => {
    vi.stubEnv('VITE_API_URL', 'http://localhost:3000')
    globalThis.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllEnvs()
  })

  it('should render the section with the correct id and title', () => {
    (globalThis.fetch as any).mockImplementation(() => new Promise(() => { }))
    const { container } = render(<Projects />)

    const section = container.querySelector('#projects')
    expect(section).toBeInTheDocument()
    expect(screen.getByText('My Projects')).toBeInTheDocument()
  })

  it('should display skeleton cards while loading', () => {
    (globalThis.fetch as any).mockImplementation(() => new Promise(() => { }))
    render(<Projects />)

    const skeletons = screen.getAllByTestId('skeleton-card')
    expect(skeletons).toHaveLength(2)
  })

  it('should render project cards after a successful fetch', async () => {
    (globalThis.fetch as any).mockResolvedValueOnce({
      json: async () => mockProjects
    })

    render(<Projects />)

    await waitFor(() => {
      expect(screen.queryByTestId('skeleton-card')).not.toBeInTheDocument()
    })

    expect(screen.getByTestId('project-card-1')).toBeInTheDocument()
    expect(screen.getByText('Project Alpha')).toBeInTheDocument()
    expect(screen.getByTestId('project-card-2')).toBeInTheDocument()
    expect(screen.getByText('Project Beta')).toBeInTheDocument()
  })

  it('should handle fetch errors gracefully and clear loading state', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
    (globalThis.fetch as any).mockRejectedValueOnce(new Error('Network Error'));

    render(<Projects />)

    await waitFor(() => {
      expect(screen.queryByTestId('skeleton-card')).not.toBeInTheDocument()
    })

    expect(consoleSpy).toHaveBeenCalledWith('Erro ao carregar projetos:', expect.any(Error))
    expect(screen.queryByTestId(/project-card-/)).not.toBeInTheDocument()
  })
})
