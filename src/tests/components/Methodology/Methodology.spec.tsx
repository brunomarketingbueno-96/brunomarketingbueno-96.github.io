import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Methodology from '../../../components/Methodology';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

vi.mock('@/components/SectionHeader', () => ({
  default: ({ title, subtitle, description }: { title: string; subtitle: string; description: string }) => (
    <div data-testid="section-header">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  ),
}));

vi.mock('@/components/CallToAction', () => ({
  default: ({ buttonText, helperText }: { buttonText: string; helperText?: string }) => (
    <div data-testid="cta">
      <button>{buttonText}</button>
      <span>{helperText}</span>
    </div>
  ),
}));

describe('Methodology component', () => {
  it('renders methodology section, pillar buttons, and switches active pillar content', () => {
    render(<Methodology />);

    expect(screen.getByText('Data-driven strategy, not guesswork.')).toBeInTheDocument();

    expect(screen.getByText(/I deeply understand your operation/i)).toBeInTheDocument();

    const secondPillarBtn = screen.getByRole('button', { name: /2\. Infrastructure and Technology/i });
    fireEvent.click(secondPillarBtn);

    expect(screen.getByText(/My technology team and I develop the necessary foundation/i)).toBeInTheDocument();

    expect(screen.getByTestId('cta')).toBeInTheDocument();
  });
});
