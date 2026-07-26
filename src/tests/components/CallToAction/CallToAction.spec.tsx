import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CallToAction from '../../../components/CallToAction';

describe('CallToAction component', () => {
  it('renders button with whatsapp link and message', () => {
    render(
      <CallToAction
        buttonText="Contact Us"
        whatsappMessage="Hello World"
      />
    );

    const link = screen.getByRole('link', { name: /Contact Us/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://wa.me/5545991566359?text=Hello%20World');
    expect(link).toHaveAttribute('target', '_blank');
    expect(screen.queryByText(/No credit card required/i)).not.toBeInTheDocument();
  });

  it('renders helper text when provided', () => {
    render(
      <CallToAction
        buttonText="Contact Us"
        helperText="No credit card required"
        whatsappMessage="Hello World"
      />
    );

    expect(screen.getByText('No credit card required')).toBeInTheDocument();
  });
});
