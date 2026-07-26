import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Introduction from '../../../components/Introduction';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

vi.mock('@/components/Features', () => ({
  default: ({ features }: { features: Array<{ id: number; title_default: string }> }) => (
    <div data-testid="features-list">
      {features.map((f) => (
        <span key={f.id}>{f.title_default}</span>
      ))}
    </div>
  ),
}));

vi.mock('@/components/CallToAction', () => ({
  default: ({ buttonText }: { buttonText: string }) => (
    <button data-testid="cta-button">{buttonText}</button>
  ),
}));

describe('Introduction component', () => {
  it('renders section title, image, paragraphs, features and CTA', () => {
    render(<Introduction />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'My biggest differential: I work for results, not just for a contract.'
    );

    const image = screen.getByAltText('Bruno Bueno working');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'br.jpg');

    expect(screen.getByText(/You should only pay for what brings results/i)).toBeInTheDocument();

    expect(screen.getByTestId('features-list')).toBeInTheDocument();
    expect(screen.getByText('10+ Years in the Market')).toBeInTheDocument();

    expect(screen.getByTestId('cta-button')).toHaveTextContent('I want a profit-focused partnership');
  });
});
