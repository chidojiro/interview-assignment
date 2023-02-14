import React from "react";

interface Svg {
  icon: string
}

const Svg = ({ icon }: Svg) => {
  return (
    <svg>
      <use xlinkHref={`/src/assets/img/icons.svg#${icon}`}></use>
    </svg>
  );
};

export default Svg;
