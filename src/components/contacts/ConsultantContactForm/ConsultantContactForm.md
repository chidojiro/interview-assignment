```jsx
import { Button, Modal, ConsultantContactForm } from '@ffw/randstad-shared-components';
import React, { useState } from 'react';

const [open, setOpen] = useState(false);

<>
  <Button handleClick={() => setOpen(true)}>Open</Button>
  {open && (
    <ConsultantContactForm 
        modalOnClose={() => setOpen(false)}
        onSubmit={() => {}}
        onChange={() => {}}
        currentLanguage='en'
        buttonLoading={false}
        recaptchaSitekey=''
        formData={{
            contactFirstName: 'John',
            contactSurname: 'Doe',
            contactEmail: 'john.doe@example.com',
            contactPhoneNumber: '1234567890',
            contactMessage: 'Some message',
        }}
        formErrors={{
            contactFirstName: '',
            contactSurname: '',
            contactMessage: '',
            contactEmail: '',
            generalError: '',
        }}
        translations={{
            labels: {
                firstNameLabel: 'First name',
                surnameLabel: 'Surname',
                emailLabel: 'Email address',
                phoneNumberLabel: 'Phone number',
                optionalLabel: 'Optional',
                messageLabel: 'Your message',
            },
            modalTitle: 'Contact your consultant',
            messagePlaceholder: 'Please give us as much details as possible about your inquiry',
            textAreaCharacters: 'characters',
            textAreaCharacterLimit: '500 characters left',
            submitButtonText: 'send',
            generalError: 'Something went wrong. Please try it again or refresh the page.',
        }}
    />
  )}
</>;
```