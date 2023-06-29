export type ColorMap = {
  [key: string]: string;
};

export interface BgColor {
  /** See more <a href="https://randstad.design/styleguide/colors/">here</a> */
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'dark-blue' | 'white';
}
