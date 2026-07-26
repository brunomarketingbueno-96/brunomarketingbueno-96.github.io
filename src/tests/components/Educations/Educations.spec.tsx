import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Educations from '../../../components/Educations';

let mockLanguage: string | undefined = 'en-US';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
    i18n: {
      get language() {
        return mockLanguage;
      },
    },
  }),
}));

vi.mock('@/components/SectionHeader', () => ({
  default: ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div data-testid="section-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  ),
}));

vi.mock('@/components/CallToAction', () => ({
  default: ({ buttonText }: { buttonText: string }) => (
    <button data-testid="cta-button">{buttonText}</button>
  ),
}));

describe('Educations component', () => {
  beforeEach(() => {
    mockLanguage = 'en-US';
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders loading spinner initially and handles fetch error', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new Error('Network error'))
    );

    const { container } = render(<Educations />);
    expect(container.querySelector('.animate-spin')).toBeInTheDocument();

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Fetch error:', expect.any(Error));
    });
  });

  it('returns null when fetch returns empty array', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: async () => [],
      })
    );

    const { container } = render(<Educations />);
    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });

  it('renders educations carousel, certificate links, and navigation', async () => {
    const mockEducations = [
      {
        id: '1',
        type: 'college',
        imageUrl: 'edu1.png',
        certificateUrl: 'https://cert1.pdf',
        translations: [
          { language: 'en', name: 'Computer Science', institution: 'MIT', description: 'Degree CS' },
        ],
      },
      {
        id: '2',
        type: 'course',
        imageUrl: 'edu2.png',
        certificateUrl: null,
        translations: [
          { language: 'pt', name: 'Marketing Course', institution: 'School', description: 'Marketing desc' },
        ],
      },
      {
        id: '3',
        type: 'course',
        imageUrl: 'edu3.png',
        certificateUrl: 'https://cert3.pdf',
        translations: [
          { language: 'fr', name: 'French Only', institution: 'FR', description: 'FR desc' },
        ],
      },
      {
        id: '4',
        type: 'college',
        imageUrl: 'edu4.png',
        certificateUrl: null,
        translations: [
          { language: 'en', name: 'Design Degree', institution: 'Art Uni', description: 'Art desc' },
        ],
      },
    ];

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: async () => mockEducations,
      })
    );

    render(<Educations />);

    await waitFor(() => {
      expect(screen.getByText('Degrees & Specializations')).toBeInTheDocument();
    });

    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.getByText('MIT')).toBeInTheDocument();
    expect(screen.getAllByText('College')[0]).toBeInTheDocument();
    expect(screen.getByText('View Certificate')).toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: /next/i });
    const prevButton = screen.getByRole('button', { name: /previous/i });

    fireEvent.click(nextButton);
    expect(screen.getByText('Marketing Course')).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByText('Computer Science')).toBeInTheDocument();

    const nextCard = screen.getByText('Marketing Course').closest('div.absolute')!;
    fireEvent.click(nextCard);
    expect(screen.getByText('Marketing Course')).toBeInTheDocument();
  });

  it('handles fallback when i18n language is undefined', async () => {
    mockLanguage = undefined;
    const mockEducations = [
      {
        id: '1',
        type: 'college',
        imageUrl: 'edu1.png',
        certificateUrl: null,
        translations: [
          { language: 'pt', name: 'Engenharia', institution: 'USP', description: 'Eng' },
        ],
      },
    ];

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: async () => mockEducations,
      })
    );

    render(<Educations />);

    await waitFor(() => {
      expect(screen.getByText('Engenharia')).toBeInTheDocument();
    });
  });
});
