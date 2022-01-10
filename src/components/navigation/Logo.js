import React from "react";
import LogoDefault from "./themes/LogoDefault";
import LogoSph from "./themes/LogoSph";

const Logo = ({ theme, homepageUrl }) => {

  return (
    <a className={"logo"} href={homepageUrl}>
      {theme == "sph" ? <LogoSph /> : <LogoDefault />}
    </a>
  );
};

export default Logo;
