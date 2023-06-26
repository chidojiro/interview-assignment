import { ColumnChildren } from '../FooterColumnNav/FooterColumnNav.types';
import { FooterLink } from '../FooterBottomNav/FooterBottomNav.types';
import { FooterSocial } from '../FooterSocials/FooterSocials.types';

export interface FooterProps {
  footerColumnNavLinks?: ColumnChildren[] | undefined;
  socialNavLinks?: FooterSocial[] | null;
  bottomNavLinks?: FooterLink[] | null;
  copyright?: string;
  className?: string;
}
