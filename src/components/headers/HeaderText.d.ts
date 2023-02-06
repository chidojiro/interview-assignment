import React from 'react';
import { BgColor } from '../../utils/getBackground';
interface Header extends BgColor {
  /** @deprecated use `bgColor` instead. */
  variation?: BgColor['bgColor'];
  titleTop: string;
  titleBottom?: string;
  /** Used for header description. */
  children?: React.ReactNode;
  cta?: {
    title: string;
    href: string;
  };
  classes?: string[];
}
/**
 * A header which only consists out of text. See [here](https://randstad.design/components/examples/headers/text/)
 */
declare const HeaderText: ({ variation, bgColor: bgColorProp, titleTop, titleBottom, children: text, cta, classes }: Header) => JSX.Element;
export default HeaderText;
