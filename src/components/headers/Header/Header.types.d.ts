import { TranslationProps } from '../../../components/headers/LoginPopover/LoginPopover.types';
import HeaderBrandsEnum from './headerBrands.enum';
import { LocalizationTypes, Routes } from '../../../utils/headerUtils/headerUtils.types';
import { Theme } from '../../navigation/navigation.types';

export type HeaderBrands =
  | HeaderBrandsEnum.Primary
  | HeaderBrandsEnum.Quaternary
  | HeaderBrandsEnum.Quinary
  | HeaderBrandsEnum.Senary
  | HeaderBrandsEnum.Tertiary
  | HeaderBrandsEnum.DarkBlue
  | HeaderBrandsEnum.Blue
  | HeaderBrandsEnum.Turquoise
  | HeaderBrandsEnum.Red
  | HeaderBrandsEnum.Yellow
  | HeaderBrandsEnum.OffWhite
  | HeaderBrandsEnum.White;

export type BreadcrumbsItems = {
  title: string;
  link: string;
  isActive?: boolean | undefined;
};

export type BreadcrumbsType = {
  breadcrumbsItems: BreadcrumbsItems[];
  breadcrumbsMobileItem: BreadcrumbsItems;
};

export type BreadcrumbsUndefinedType = {
  breadcrumbsItems?: undefined;
  breadcrumbsMobileItem?: undefined;
};

export type LanguageSwitcherItems = {
  language: string;
  isActive?: boolean;
  url?: string;
};

export interface HeaderProps {
  brand: HeaderBrands;
  isMyRandstad: boolean;
  routes: Routes;
  submenuLinks: Routes | null;
  localization: LocalizationTypes;
  savedJobsEnabled?: {
    gdsApiKey: string;
    gdsApiUrl: string;
    shareIdTokenAcrossSubdomains: boolean;
    ariaLabel: string;
  };
  popoverTranslations?: TranslationProps;
  currentUrl: string | undefined;
  RouterComponent?: React.FC<any>;
  breadcrumbs?: BreadcrumbsType | BreadcrumbsUndefinedType;
  currentRoute?: string | undefined;
  languageSwitcherItems?: LanguageSwitcherItems[];
  useToast?: boolean;
  toastSettings?: {
    id: string;
    title: Record<string, string>;
    buttonSuccessText: Record<string, string>;
    buttonCloseText: Record<string, string>;
  };
  gtmSettings?: {
    type: string;
    id: string;
    country: string;
    env?: string;
  },
  theme?: Theme['theme'];
}

type Menu = {
  main?: [];
  utility?: [];
};
