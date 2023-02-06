export interface BgColor {
  /** See more <a href="https://randstad.design/styleguide/colors/">here</a>*/
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'dark-blue';
}
export declare const getBackground: (color: BgColor['bgColor'], legacy?: boolean) => string;
