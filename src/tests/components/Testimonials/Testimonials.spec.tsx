import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Testimonials from '../../../components/Testimonials';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

describe('Testimonials component', () => {
  it('renders section title, subtitle, description, and youtube iframe embeds', () => {
    const { container } = render(<Testimonials />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Customer stories that speak louder than promises.'
    );

    const iframes = container.querySelectorAll('iframe');
    expect(iframes).toHaveLength(4);

    expect(iframes[0]).toHaveAttribute('src', 'https://www.youtube.com/embed/SPsZ6tmrjYo?rel=0&modestbranding=1');
    expect(iframes[0]).toHaveAttribute('title', 'Testimonial - Victor and Raquel');
  });
});
