import React from "react";

interface Svg {
  icon: string
}

const Svg = ({ icon }: Svg) => {
  return (
    <svg>
      <use xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${icon}`}></use>
    </svg>
  );
};

export default Svg;
