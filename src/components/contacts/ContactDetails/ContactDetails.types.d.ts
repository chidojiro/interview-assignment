import { PersonTypes } from '../PersonProfile/PersonProfile.types';
import { ContactPersonForm } from '../Contacts.types';
import React from 'react';

export interface ContactPersonProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  type?: 'contact-person' | 'meet-the-team';
  profiles: PersonTypes[];
  backgroundClass?: string;
  contactForm?: ContactPersonForm;
  noImage?: boolean;
}
