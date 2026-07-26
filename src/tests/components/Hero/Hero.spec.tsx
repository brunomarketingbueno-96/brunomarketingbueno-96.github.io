import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../../../components/Hero';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

describe('Hero component', () => {
  it('renders role, title, description, call-to-actions, and hero image', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Marketing Manager');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Strategy, technology and performance to scale your business.');

    expect(screen.getByText(/I work with projects focused on sales of physical products/i)).toBeInTheDocument();

    const primaryCta = screen.getByRole('link', { name: 'Request Free Diagnosis' });
    expect(primaryCta).toHaveAttribute('href', '#servicos');

    const secondaryCta = screen.getByRole('link', { name: 'View portfolio' });
    expect(secondaryCta).toHaveAttribute('href', '#sobre');

    const heroImage = screen.getByAltText('Bruno Bueno');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'bru.png');
  });
});
