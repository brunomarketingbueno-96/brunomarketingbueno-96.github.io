import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Features from '../../../components/Features';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

describe('Features component', () => {
  it('renders list of features with title, description and svg path', () => {
    const mockFeatures = [
      {
        id: 1,
        title_key: 'feat.title_1',
        title_default: 'Feature One',
        desc_key: 'feat.desc_1',
        desc_default: 'Description One',
        icon_path: 'M5 13l4 4L19 7',
      },
      {
        id: 2,
        title_key: 'feat.title_2',
        title_default: 'Feature Two',
        desc_key: 'feat.desc_2',
        desc_default: 'Description Two',
        icon_path: 'M12 4v16m8-8H4',
      },
    ];

    render(<Features features={mockFeatures} />);

    expect(screen.getByText('Feature One')).toBeInTheDocument();
    expect(screen.getByText('Description One')).toBeInTheDocument();
    expect(screen.getByText('Feature Two')).toBeInTheDocument();
    expect(screen.getByText('Description Two')).toBeInTheDocument();
  });
});
