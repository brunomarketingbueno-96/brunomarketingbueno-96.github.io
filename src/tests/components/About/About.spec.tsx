import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../../../components/About';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

describe('About component', () => {
  it('renders about section with heading, image, and text content', () => {
    render(<About />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Me (Bruno Bueno).');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Strategy driven by results and purpose.');

    const image = screen.getByAltText('Bruno Bueno holding an award');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'bre.png');

    expect(screen.getByText(/With over 10 years in the market/i)).toBeInTheDocument();
    expect(screen.getByText(/I was born out of frustration/i)).toBeInTheDocument();
    expect(screen.getByText(/I was born in Caxias do Sul-RS/i)).toBeInTheDocument();
  });
});
