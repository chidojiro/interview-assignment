export type UserNameProps = {
  givenName: string;
  familyName: string;
  preferredName: string | undefined;
};

export type LinksType = {
  id?: string;
  linkActive?: boolean;
  url?: string;
  title?: string;
  icon?: string;
};

export interface LoggedInProps {
  title: string | React.ReactNode;
  menuLinks?: Array<LinksType>;
  userName?: UserNameProps;
  logoutUrl?: string;
  logoutText?: string | React.ReactNode;
  // disable eslint for type any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RouterComponent?: React.FC<any>;
  callback?: () => void;
}

export interface LoggedOutProps {
  children?: string | React.ReactNode;
  title?: string | React.ReactNode;
  registerUrl?: string;
  registerText?: string | React.ReactNode;
  loginUrl?: string;
  loginText?: string | React.ReactNode;
  // disable eslint for type any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RouterComponent?: React.FC<any>;
  callback?: () => void;
}

export type TranslationProps = {
  myRandstadTitle: string | React.ReactNode;
  greeting: string | React.ReactNode;
  registerText: string | React.ReactNode;
  loginText: string | React.ReactNode;
  logoutText: string | React.ReactNode;
  heading1: string | React.ReactNode;
  heading2: string | React.ReactNode;
  listText1: string | React.ReactNode;
  listText2: string | React.ReactNode;
  listText3: string | React.ReactNode;
};

export type Routes = {
  // disable eslint for type any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

type PopoverArrowVariants = 'left' | 'center' | 'right';

export interface LoginPopoverPropTypes {
  isAuth?: boolean;
  links?: object;
  locale?: string | undefined;
  languagePrefix: string;
  translations?: TranslationProps | undefined;
  userName?: UserNameProps;
  arrowVariant?: PopoverArrowVariants;
  logoutUrl?: string;
  currentRoute?: string | undefined;
  trackLoginPopoverOpen: boolean;
  trackLoginPopoverEvent: (open: boolean) => void;
  // disable eslint for type any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RouterComponent?: React.FC<any>;
}
