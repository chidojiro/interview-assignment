import React from "react";
import LogoDefault from "./themes/LogoDefault";
import LogoSph from "./themes/LogoSph";
import LogoTT from "./themes/LogoTT";
import { Theme } from './types'

export interface LogoProps extends Theme {
  homepageUrl: string
}

const Logo = ({ theme, homepageUrl }: LogoProps) => {
  return (
    <a className={"logo"} href={homepageUrl}>
      {theme == "sph" ? <LogoSph /> : theme == "tt" ? <LogoTT /> : <LogoDefault />}
    </a>
  );
};

export default Logo;
