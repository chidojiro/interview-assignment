import { BgColor } from '../../../utils/getBackground/getBackground.types';

export interface Header extends BgColor {
  /** @deprecated use `bgColor` instead. */
  variation?: BgColor['bgColor'];
  titleTop: string | React.ReactNode;
  titleBottom?: string | React.ReactNode;
  /** Used for header description. */
  children?: React.ReactNode;
  cta?: {
    title: string;
    href: string;
  };
  classes?: string[];
}
