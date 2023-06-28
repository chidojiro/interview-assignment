import { BgColor } from '../../../utils/getBackground/getBackground.types';

export interface BreadcrumbsProps extends BgColor {
  /** `active` used to highlight the item */
  items?:
    | {
        title: string;
        link: string;
        active?: boolean;
      }[]
    | [];
  mobileItem?: {
    title: string;
    link: string;
  };
  /** This property used for adding specific class `navigation--app` for the apps. Since the navigation markup there is different from Orbit. */
  app?: boolean;
  RouterComponent?: React.FC<any> | undefined;
}
