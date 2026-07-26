import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../../components/Header';

vi.mock('@/components/Logo', () => ({
  default: () => <div data-testid="header-logo">Logo</div>,
}));

vi.mock('@/components/Menu', () => ({
  default: ({ mobile, onClose }: { mobile?: boolean; onClose?: () => void }) => (
    <div data-testid={mobile ? 'mobile-menu' : 'desktop-menu'}>
      {mobile && <button data-testid="close-mobile" onClick={onClose}>Close</button>}
    </div>
  ),
}));

describe('Header component', () => {
  it('renders header with logo and desktop menu by default', () => {
    render(<Header />);
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-menu')).toBeInTheDocument();
    expect(document.body.style.overflow).toBe('unset');
  });

  it('toggles mobile menu and body overflow on button click', () => {
    const { unmount } = render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /Toggle menu/i });

    fireEvent.click(toggleButton);
    expect(document.body.style.overflow).toBe('hidden');
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();

    const closeButton = screen.getByTestId('close-mobile');
    fireEvent.click(closeButton);
    expect(document.body.style.overflow).toBe('unset');

    fireEvent.click(toggleButton);
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.click(toggleButton);
    expect(document.body.style.overflow).toBe('unset');

    fireEvent.click(toggleButton);
    unmount();
    expect(document.body.style.overflow).toBe('unset');
  });
});
