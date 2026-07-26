import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from '../../../components/Menu';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

vi.mock('@/components/LanguageSwitcher', () => ({
  default: ({ mobile }: { mobile?: boolean }) => (
    <div data-testid="lang-switcher" data-mobile={mobile}>LangSwitcher</div>
  ),
}));

describe('Menu component', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('renders desktop menu links and handles scroll to top without onClose', () => {
    render(<Menu />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Methodology')).toBeInTheDocument();
    expect(screen.getByText('Cases')).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeLink);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('renders mobile menu and triggers onClose on link clicks', () => {
    const mockOnClose = vi.fn();
    render(<Menu mobile onClose={mockOnClose} />);

    expect(screen.getByTestId('lang-switcher')).toHaveAttribute('data-mobile', 'true');

    const homeLink = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeLink);
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    const methodologyLink = screen.getByRole('link', { name: 'Methodology' });
    fireEvent.click(methodologyLink);
    expect(mockOnClose).toHaveBeenCalledTimes(2);
  });
});
