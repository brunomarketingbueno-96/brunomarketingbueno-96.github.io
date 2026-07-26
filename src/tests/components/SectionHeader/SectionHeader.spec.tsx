import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionHeader from '../../../components/SectionHeader';

describe('SectionHeader component', () => {
  it('renders title and subtitle without description or icon', () => {
    render(<SectionHeader title="Main Title" subtitle="Sub Title" />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sub Title');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Main Title');
    expect(screen.queryByText('Description text')).not.toBeInTheDocument();
  });

  it('renders title, subtitle, description and icon when provided', () => {
    render(
      <SectionHeader
        title="Main Title"
        subtitle="Sub Title"
        description="Description text"
        icon={<span data-testid="custom-icon">Icon</span>}
      />
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });
});
