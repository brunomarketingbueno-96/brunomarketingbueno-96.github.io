import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../../../components/Contact';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

describe('Contact component', () => {
  it('renders section title, subtitle, description and whatsapp link', () => {
    render(<Contact />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('The next step');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Ready to stop losing sales and start scaling?');

    expect(screen.getByText(/As I work in-depth on projects/i)).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Schedule Strategic Diagnosis/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      `https://wa.me/5545991566359?text=${encodeURIComponent(
        'Hello Bruno, I am ready to stop losing sales. I would like to schedule a strategic diagnosis for my company.'
      )}`
    );

    expect(screen.getByText('Your information is safe. Contact is directly with me.')).toBeInTheDocument();
  });
});
