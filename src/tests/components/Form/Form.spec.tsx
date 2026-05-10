import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useContactForm } from '@/hooks/useContactForm'

import Form from '@/components/Form'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'contact.form.name.label': 'Name',
        'contact.form.company.label': 'Company',
        'contact.form.email.label': 'Email',
        'contact.form.whatsapp.label': 'WhatsApp',
        'contact.form.message.label': 'Message',
        'contact.form.submit': 'Send Message',
        'contact.form.messages.success': 'Form submitted successfully!',
        'error.invalid_email': 'Invalid email address'
      }
      return translations[key] || key
    }
  })
}))

vi.mock('@/helpers/masks', () => ({
  formatWhatsApp: vi.fn((value) => value)
}))

vi.mock('@/hooks/useContactForm', () => ({
  useContactForm: vi.fn()
}))

vi.mock('@/components/Input', () => ({
  default: ({ label, children, mask, ...props }: any) => (
    <div data-testid={`wrapper-${props.name}`}>
      <label htmlFor={props.id}>{label}</label>
      <input data-testid={`input-${props.name}`} {...props} />
    </div>
  )
}))

vi.mock('@/components/Textarea', () => ({
  default: ({ label, children, ...props }: any) => (
    <div data-testid={`wrapper-${props.name}`}>
      <label htmlFor={props.id}>{label}</label>
      <textarea data-testid={`textarea-${props.name}`} {...props} />
    </div>
  )
}))

describe('Form Component', () => {
  const mockHandleChange = vi.fn()
  const mockHandleSubmit = vi.fn((e) => e.preventDefault())

  const defaultMockReturn = {
    formData: {
      name: '',
      company: '',
      email: '',
      whatsapp: '',
      message: ''
    },
    status: 'idle',
    errorKey: null,
    handleChange: mockHandleChange,
    handleSubmit: mockHandleSubmit
  }

  beforeEach(() => {
    vi.clearAllMocks()
      ; (useContactForm as any).mockReturnValue(defaultMockReturn)
  })

  it('should render all form fields correctly', () => {
    render(<Form />)

    expect(screen.getByTestId('input-name')).toBeInTheDocument()
    expect(screen.getByTestId('input-company')).toBeInTheDocument()
    expect(screen.getByTestId('input-email')).toBeInTheDocument()
    expect(screen.getByTestId('input-whatsapp')).toBeInTheDocument()
    expect(screen.getByTestId('textarea-message')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('should pass form data to input values', () => {
    ; (useContactForm as any).mockReturnValue({
      ...defaultMockReturn,
      formData: {
        name: 'John Doe',
        company: 'Tech Corp',
        email: 'john@techcorp.com',
        whatsapp: '123456789',
        message: 'Hello'
      }
    })

    render(<Form />)

    expect(screen.getByTestId('input-name')).toHaveValue('John Doe')
    expect(screen.getByTestId('input-company')).toHaveValue('Tech Corp')
    expect(screen.getByTestId('input-email')).toHaveValue('john@techcorp.com')
    expect(screen.getByTestId('input-whatsapp')).toHaveValue('123456789')
    expect(screen.getByTestId('textarea-message')).toHaveValue('Hello')
  })

  it('should trigger handleChange when user types', () => {
    render(<Form />)

    const nameInput = screen.getByTestId('input-name')
    fireEvent.change(nameInput, { target: { value: 'Jane' } })

    expect(mockHandleChange).toHaveBeenCalled()
  })

  it('should trigger handleSubmit on form submission', () => {
    const { container } = render(<Form />)

    const form = container.querySelector('form')
    if (form) {
      fireEvent.submit(form)
    }

    expect(mockHandleSubmit).toHaveBeenCalled()
  })

  it('should disable submit button when status is loading', () => {
    ; (useContactForm as any).mockReturnValue({
      ...defaultMockReturn,
      status: 'loading'
    })

    render(<Form />)

    const button = screen.getByRole('button', { name: 'Send Message' })
    expect(button).toBeDisabled()
  })

  it('should display error message when status is error', () => {
    ; (useContactForm as any).mockReturnValue({
      ...defaultMockReturn,
      status: 'error',
      errorKey: 'error.invalid_email'
    })

    render(<Form />)

    expect(screen.getByText('Invalid email address')).toBeInTheDocument()
    expect(screen.getByText('Invalid email address')).toHaveClass('text-red-500')
  })

  it('should display success message when status is success', () => {
    ; (useContactForm as any).mockReturnValue({
      ...defaultMockReturn,
      status: 'success'
    })

    render(<Form />)

    expect(screen.getByText('Form submitted successfully!')).toBeInTheDocument()
    expect(screen.getByText('Form submitted successfully!')).toHaveClass('text-green-500')
  })
})
