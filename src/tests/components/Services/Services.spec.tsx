import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Services from '../../../components/Services';

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

describe('Services component', () => {
  beforeEach(() => {
    mockLanguage = 'en-US';
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders loading skeletons initially and handles fetch error', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Fetch failed')));

    const { container } = render(<Services />);
    expect(container.querySelectorAll('.animate-pulse')).toHaveLength(4);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  it('renders service cards when fetch succeeds', async () => {
    const mockServices = [
      {
        id: '1',
        link: null,
        imageUrl: 'service1.png',
        translations: [
          { language: 'en', title: 'SEO Strategy', description: 'Search optimization' },
        ],
      },
      {
        id: '2',
        link: 'https://example.com',
        imageUrl: 'service2.png',
        translations: [
          { language: 'pt', title: 'Tráfego Pago', description: 'Gestão de anúncios' },
        ],
      },
      {
        id: '3',
        link: null,
        imageUrl: 'service3.png',
        translations: [
          { language: 'es', title: 'Diseño', description: 'Diseño web' },
        ],
      },
    ];

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: async () => mockServices,
      })
    );

    render(<Services />);

    await waitFor(() => {
      expect(screen.getByText('SEO Strategy')).toBeInTheDocument();
    });

    expect(screen.getByText('Tráfego Pago')).toBeInTheDocument();
    expect(screen.queryByText('Diseño')).not.toBeInTheDocument();
  });

  it('handles fallback when i18n language is undefined', async () => {
    mockLanguage = undefined;
    const mockServices = [
      {
        id: '1',
        link: null,
        imageUrl: 'service1.png',
        translations: [
          { language: 'pt', title: 'Consultoria', description: 'Descrição da consultoria' },
        ],
      },
    ];

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: async () => mockServices,
      })
    );

    render(<Services />);

    await waitFor(() => {
      expect(screen.getByText('Consultoria')).toBeInTheDocument();
    });
  });
});
