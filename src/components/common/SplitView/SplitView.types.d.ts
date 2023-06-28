import { BgColor } from '../../../utils/getBackground/getBackground.types';

export interface SplitViewProps extends BgColor {
  alternative?: boolean;
  illustration?: string;
  /**
   * The photos prop accepts an array of strings (use max of 3 array items).
   * First array item is the biggest image that goes into the IMG tag.
   * The next two items in the array goes into the SOURCE tags.
   */
  photos?: [string?, string?, string?];
  altTitle?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLink?: string;
  buttonText?: string;
}
