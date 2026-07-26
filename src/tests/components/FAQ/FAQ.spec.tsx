import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '../../../components/FAQ';

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

describe('FAQ component', () => {
  it('renders section header, FAQs, and toggles items correctly', () => {
    render(<FAQ />);

    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('Clear your doubts')).toBeInTheDocument();

    const firstQuestion = screen.getByText("Does Bruno's service work for physical businesses or only digital ones?");
    const secondQuestion = screen.getByText('Do you work like a traditional marketing agency?');

    expect(firstQuestion).toBeInTheDocument();
    expect(secondQuestion).toBeInTheDocument();

    const firstButton = firstQuestion.closest('button')!;
    const secondButton = secondQuestion.closest('button')!;

    fireEvent.click(firstButton);
    fireEvent.click(secondButton);

    const link = screen.getByRole('link', { name: /I still have questions/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      `https://wa.me/5545991566359?text=${encodeURIComponent(
        'Hello Bruno, I read the FAQs on the website and still have some questions. Can we talk?'
      )}`
    );
  });
});
