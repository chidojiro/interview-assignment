import { BgColor } from '../../../utils/getBackground';

export interface HeaderIllustrationProps extends BgColor {
  illustration?: string;
  illustrationClasses?: string;
  narrowIllustration?: boolean;
  altTitle?: string;
  title?: string;
  titleClasses?: string;
  description?: string;
  buttonLink?: string;
  buttonText?: string;
}
