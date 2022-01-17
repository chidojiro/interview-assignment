import React from "react";
import LogoDefault from "./themes/LogoDefault";
import LogoSph from "./themes/LogoSph";
import t from "prop-types";

const Logo = ({ theme, homepageUrl }) => {
  return (
    <a className={"logo"} href={homepageUrl}>
      {theme == "sph" ? <LogoSph /> : <LogoDefault />}
    </a>
  );
};

Logo.propTypes = {
  theme: t.string,
  homepageUrl: t.string,
};

export default Logo;
