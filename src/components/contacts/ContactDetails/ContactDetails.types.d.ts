import { PersonTypes } from '../PersonProfile/PersonProfile.types';
import React from 'react';

export interface ContactPersonProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  type?: 'contact-person' | 'meet-the-team';
  profiles: PersonTypes[];
  backgroundClass?: string;
  contactForm?: {
    contactFormButtonText: string;
    onContactFormButtonClicked: (event: React.MouseEvent) => void;
  };
}
