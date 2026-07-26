import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

let mockLanguage: string | undefined = 'pt-BR';
const mockChangeLanguage = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      get language() {
        return mockLanguage;
      },
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

describe('LanguageSwitcher component', () => {
  beforeEach(() => {
    mockLanguage = 'pt-BR';
    mockChangeLanguage.mockReset();
  });

  it('renders PT display language by default when language is pt-BR or undefined', () => {
    const { rerender } = render(<LanguageSwitcher />);
    expect(screen.getByText('PT')).toBeInTheDocument();

    mockLanguage = undefined;
    rerender(<LanguageSwitcher />);
    expect(screen.getByText('PT')).toBeInTheDocument();
  });

  it('renders ES display language when language includes es', () => {
    mockLanguage = 'es-ES';
    render(<LanguageSwitcher mobile />);
    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  it('opens dropdown menu in mobile mode and selects a language', () => {
    render(<LanguageSwitcher mobile />);

    const toggleButton = screen.getByRole('button', { name: /PT/i });
    fireEvent.click(toggleButton);

    expect(screen.getByText('Português')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
  });

  it('opens dropdown menu, selects a language and calls changeLanguage', () => {
    render(<LanguageSwitcher />);

    const toggleButton = screen.getByRole('button', { name: /PT/i });
    fireEvent.click(toggleButton);

    expect(screen.getByText('Português')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Español'));
    expect(mockChangeLanguage).toHaveBeenCalledWith('es-ES');
    expect(screen.queryByText('Português')).not.toBeInTheDocument();
  });

  it('closes dropdown when clicking outside component', () => {
    const { unmount } = render(
      <div>
        <div data-testid="outside">Outside</div>
        <LanguageSwitcher />
      </div>
    );

    const toggleButton = screen.getByRole('button', { name: /PT/i });
    fireEvent.click(toggleButton);
    expect(screen.getByText('Português')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByText('Português'));
    expect(screen.getByText('Português')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(screen.queryByText('Português')).not.toBeInTheDocument();

    unmount();
  });
});
