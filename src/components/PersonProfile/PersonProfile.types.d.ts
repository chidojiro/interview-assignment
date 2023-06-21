import { SocialLinkTypes } from '../SocialLinks/SocialLinks.types';
import { ImageSizeClasses } from '../ImageSizeClasses.types';

export type PersonTypes = {
  pictureUrl?: string;
  name: string;
  initials?: string;
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  socialLinks?: SocialLinkTypes[];
};

export interface PersonProfileTypes {
  size?: keyof ImageSizeClasses;
  person: PersonTypes;
  avatarClasses?: string;
  personProfileClasses?: string;
  personInfoClasses?: string;
}
