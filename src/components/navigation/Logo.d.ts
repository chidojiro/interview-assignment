import { Theme } from './types';
export interface LogoProps extends Theme {
  homepageUrl: string;
}
declare const Logo: ({ theme, homepageUrl }: LogoProps) => JSX.Element;
export default Logo;
