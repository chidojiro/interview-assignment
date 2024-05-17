import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ConsultantContactForm from '../../../components/contacts/ConsultantContactForm';

describe('ConsultantContactForm component test', () => {
  const mockFormData = {
    contactFirstName: 'John',
    contactSurname: 'Doe',
    contactEmail: 'john.doe@example.com',
    contactPhoneNumber: '1234567890',
    contactMessage: 'Test message',
  };

  const mockFormErrorsPositive = {
    contactFirstName: 'First name is required',
    contactSurname: 'Surname is required',
    contactEmail: 'Invalid email address',
    contactMessage: 'Message cannot be empty',
    generalError: 'An error occurred',
    recaptcha: 'error with recaptcha',
    contactPhoneNumber: 'phone number is invalid',
  };

  const mockFormErrorsNegative = {
    contactFirstName: '',
    contactSurname: '',
    contactEmail: '',
    contactMessage: '',
    generalError: '',
    recaptcha: '',
    contactPhoneNumber: '',
  };

  const mockTranslations = {
    labels: {
      firstNameLabel: 'First Name',
      surnameLabel: 'Surname',
      emailLabel: 'Email',
      phoneNumberLabel: 'Phone Number',
      optionalLabel: '(optional)',
      messageLabel: 'Message',
    },
    modalTitle: 'Contact Us',
    messagePlaceholder: 'Enter your message here',
    textAreaCharacters: 'characters',
    textAreaCharacterLimit: '500 characters left',
    submitButtonText: 'Submit',
  };

  const mockRecaptchaSitekey = 'mock-recaptcha-sitekey';

  it('renders form fields and submit button', () => {
    render(
      <ConsultantContactForm
        onRecaptchaChange={() => {}}
        recaptchaRef={null}
        modalOnClose={() => {}}
        onSubmit={() => {}}
        onChange={() => {}}
        currentLanguage="en"
        buttonLoading={false}
        formData={mockFormData}
        formErrors={mockFormErrorsNegative}
        translations={mockTranslations}
        recaptchaSitekey={mockRecaptchaSitekey}
      />,
    );

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Surname')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('displays form errors', () => {
    render(
      <ConsultantContactForm
        onRecaptchaChange={() => {}}
        recaptchaRef={null}
        modalOnClose={() => {}}
        onSubmit={() => {}}
        onChange={() => {}}
        currentLanguage="en"
        buttonLoading={false}
        formData={mockFormData}
        formErrors={mockFormErrorsPositive}
        translations={mockTranslations}
        recaptchaSitekey={mockRecaptchaSitekey}
      />,
    );

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Surname is required')).toBeInTheDocument();
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    expect(screen.getByText('Message cannot be empty')).toBeInTheDocument();
  });

  it('submits the form when the submit button is clicked', () => {
    const handleSubmit = jest.fn();

    render(
      <ConsultantContactForm
        onRecaptchaChange={() => {}}
        recaptchaRef={null}
        modalOnClose={() => {}}
        onSubmit={handleSubmit}
        onChange={() => {}}
        currentLanguage="en"
        buttonLoading={false}
        formData={mockFormData}
        formErrors={mockFormErrorsNegative}
        translations={mockTranslations}
        recaptchaSitekey={mockRecaptchaSitekey}
      />,
    );

    fireEvent.click(screen.getByText('Submit'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
