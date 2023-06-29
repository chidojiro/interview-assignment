type Menu = {
  main?: [];
};

type MenuItem = {
  title: string;
  url: string;
  children: [];
  icon: string;
};

export type Routes = {
  [key: string]: any;
};

export type LocalizationTypes = {
  locales: string[] | undefined;
  locale: string | undefined;
  defaultLocale: string | undefined;
};
