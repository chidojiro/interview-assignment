import { MouseEvent } from 'react';

export type ContactPersonForm = {
  contactFormButtonText: string;
  onContactFormButtonClicked: (event: MouseEvent) => void;
};
