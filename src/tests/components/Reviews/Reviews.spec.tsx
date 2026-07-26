import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Reviews from '../../../components/Reviews';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

vi.mock('@/components/SectionHeader', () => ({
  default: ({ title, subtitle, description, icon }: { title: string; subtitle: string; description: string; icon?: React.ReactNode }) => (
    <div data-testid="section-header">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      {icon && <div data-testid="header-icon">{icon}</div>}
    </div>
  ),
}));

describe('Reviews component', () => {
  it('renders section header with icon, review images, and linkedin link', () => {
    render(<Reviews />);

    expect(screen.getByText('Professional recognition')).toBeInTheDocument();
    expect(screen.getByTestId('header-icon')).toBeInTheDocument();

    expect(screen.getByAltText('Recommendation from Iuna Aikeuara')).toBeInTheDocument();
    expect(screen.getByAltText('Recommendation from Bruna Sibilio')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'directly on my LinkedIn profile' });
    expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/bruno-mendes-bueno-944834217/details/recommendations/'
    );
  });
});
