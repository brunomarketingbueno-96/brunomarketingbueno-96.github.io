import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from '../../../components/Logo';

describe('Logo component', () => {
  it('renders logo with icon and default text colors', () => {
    const { container } = render(<Logo />);

    expect(screen.getByText('BRUNO')).toBeInTheDocument();
    expect(screen.getByText('BUENO')).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();

    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveClass('text-amber-600');
  });

  it('renders logo with white theme and visible icon when isWhite is true', () => {
    const { container } = render(<Logo isWhite />);

    const brunoSpan = screen.getByText('BRUNO');
    expect(brunoSpan).toHaveClass('text-white');

    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveClass('text-white');
  });

  it('renders logo with white theme and hides icon when hideIcon is true', () => {
    const { container } = render(<Logo isWhite hideIcon />);

    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeNull();
  });
});
