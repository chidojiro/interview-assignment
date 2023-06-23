import { PersonTypes } from '../PersonProfile/PersonProfile.types';

export interface ContactPersonProps {
  title: string;
  description?: string;
  type?: 'contact-person' | 'meet-the-team';
  profiles: PersonTypes[];
  backgroundClass?: string;
}
