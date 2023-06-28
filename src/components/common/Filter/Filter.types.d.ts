import { Library } from '../../../hooks/useLibrary';

export interface FilterProps extends Library {
  title: string;
  mobileTitle: string;
  children: any;
  footer: React.ReactElement;
  clearLink: React.ReactNode;
  closeMobileOnSubmit: boolean;
}
