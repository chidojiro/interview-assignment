import { Items } from './types';
export interface MobileNavigationProps {
  items?: Items[];
  showMyRandstad?: boolean;
  myRandstadUrl?: string;
}
declare const MobileNavigation: ({ items, myRandstadUrl, showMyRandstad }: MobileNavigationProps) => JSX.Element | null;
export default MobileNavigation;
