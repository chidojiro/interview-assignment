import { Items } from '../navigation.types';

export interface MobileNavigationProps {
  items?: Items[];
  showMyRandstad?: boolean;
  myRandstadUrl?: string;
  myRandstadLabel?: string | React.ReactNode;
  myRandstadMenu?: Items[];
  languagePrefix?: string;
}
