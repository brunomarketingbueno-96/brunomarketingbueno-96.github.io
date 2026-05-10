import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import Educations from '@/components/Educations'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, defaultValue?: string) => defaultValue || key
  })
}))

vi.mock('@/components/EducationItem', () => ({
  default: ({ currentEdu }: { currentEdu: { id: string, title?: string } }) => (
    <div data-testid="education-item">{currentEdu?.id || currentEdu?.title}</div>
  )
}))

describe('Educations Component', () => {
  const mockEducations = [
    { id: 'edu-1', title: 'Graduation' },
    { id: 'edu-2', title: 'Post-Graduation' },
    { id: 'edu-3', title: 'Certification' }
  ]

  beforeEach(() => {
    vi.stubEnv('VITE_API_URL', 'http://localhost:3000')
    globalThis.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllEnvs()
  })

  it('should render loading spinner initially', () => {
    (globalThis.fetch as any).mockImplementation(() => new Promise(() => { }))
    const { container } = render(<Educations />)

    expect(container.querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('should return null (empty DOM) if no educations are returned', async () => {
    (globalThis.fetch as any).mockResolvedValueOnce({
      json: async () => []
    })

    const { container } = render(<Educations />)

    await waitFor(() => {
      expect(container.querySelector('.animate-spin')).not.toBeInTheDocument()
    })

    expect(container).toBeEmptyDOMElement()
  })

  it('should render section and single item without navigation if array has length 1', async () => {
    (globalThis.fetch as any).mockResolvedValueOnce({
      json: async () => [mockEducations[0]]
    })

    render(<Educations />)

    await waitFor(() => {
      expect(screen.getByTestId('education-item')).toHaveTextContent('edu-1')
    })

    expect(screen.getByText('Educação')).toBeInTheDocument()

    expect(screen.queryByLabelText('Próxima formação')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Formação anterior')).not.toBeInTheDocument()
  })

  it('should render navigation controls and cycle through items correctly', async () => {
    (globalThis.fetch as any).mockResolvedValueOnce({
      json: async () => mockEducations
    })

    render(<Educations />)

    await waitFor(() => {
      expect(screen.getByTestId('education-item')).toHaveTextContent('edu-1')
    })

    const nextBtn = screen.getByLabelText('Próxima formação')
    const prevBtn = screen.getByLabelText('Formação anterior')

    const dotsContainer = nextBtn.previousElementSibling
    expect(dotsContainer?.children).toHaveLength(3)

    fireEvent.click(nextBtn)
    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-2')

    fireEvent.click(nextBtn)
    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-3')

    fireEvent.click(nextBtn)
    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-1')

    fireEvent.click(prevBtn)
    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-3')
  })

  it('should handle fetch errors gracefully and stop loading', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { })
      ; (globalThis.fetch as any).mockRejectedValueOnce(new Error('Network Error'))

    const { container } = render(<Educations />)

    await waitFor(() => {
      expect(container.querySelector('.animate-spin')).not.toBeInTheDocument()
    })

    expect(consoleSpy).toHaveBeenCalledWith('Erro ao carregar formações:', expect.any(Error))

    expect(container).toBeEmptyDOMElement()
  })
})
