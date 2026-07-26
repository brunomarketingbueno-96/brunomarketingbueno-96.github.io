import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../../../components/Footer';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

vi.mock('@/components/Logo', () => ({
  default: ({ isWhite }: { isWhite?: boolean }) => (
    <div data-testid="logo" data-white={isWhite}>Logo</div>
  ),
}));

describe('Footer component', () => {
  it('renders logo, navigation links, connect links and copyright information', () => {
    render(<Footer />);

    expect(screen.getByTestId('logo')).toHaveAttribute('data-white', 'true');
    expect(screen.getByText('Navigation')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#hero');
    expect(screen.getByRole('link', { name: 'Introduction' })).toHaveAttribute('href', '#introduction');
    expect(screen.getByRole('link', { name: 'Methodology' })).toHaveAttribute('href', '#methodology');
    expect(screen.getByRole('link', { name: 'Results' })).toHaveAttribute('href', '#cases');
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services');
    expect(screen.getByRole('link', { name: 'Testimonials' })).toHaveAttribute('href', '#depoimentos');
    expect(screen.getByRole('link', { name: 'Recommendations' })).toHaveAttribute('href', '#recomendacoes-linkedin');
    expect(screen.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: 'Educations' })).toHaveAttribute('href', '#educations');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: 'FAQ' })).toHaveAttribute('href', '#FAQ');

    const linkedinLink = screen.getByRole('link', { name: /Professional LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/bruno-mendes-bueno-944834217/');

    const emailLink = screen.getByRole('link', { name: /bruno.online.bueno@gmail.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:bruno.online.bueno@gmail.com');

    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year} Bruno Bueno`, 'i'))).toBeInTheDocument();
  });
});
