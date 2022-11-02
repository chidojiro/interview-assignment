import React from "react";
import t from "prop-types";

const Svg = ({ icon }) => {
  return (
    <svg>
      <use xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${icon}`}></use>
    </svg>
  );
};

Svg.propTypes = {
  icon: t.string.isRequired,
};

export default Svg;
