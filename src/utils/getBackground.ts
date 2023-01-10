type ColorMap = {
  [key: string]: string
}

export interface BgColor {
  /** See more <a href="https://randstad.design/styleguide/colors/">here</a>*/
  bgColor: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary",
}

export const getBackground = (color: BgColor['bgColor'], legacy: boolean = false) => {
  // Handle legacy background classes.
  if (color && legacy) {
    return `bg-brand--${color}`;
  }

  // Color map of Orbit color support old and new color name.
  const colorMap: ColorMap = {
    white: "white",
    // Old color names.
    blue: "brand-primary",
    "dark-blue": "brand-secondary",
    "off-white": "brand-tertiary",
    turquoise: "brand-quaternary",
    yellow: "brand-senary",
    red: "brand-quinary",
    // New color names.
    primary: "brand-primary",
    secondary: "brand-secondary",
    tertiary: "brand-tertiary",
    quaternary: "brand-quaternary",
    senary: "brand-senary",
    quinary: "brand-quinary",
  };

  const sphColorMap: ColorMap = {
    "gradient-orange": "gradient-orange",
  };

  if (color && sphColorMap[color]) {
    return `bg-brand--${sphColorMap[color]}`;
  }

  if (color && colorMap[color]) {
    return `bg-variant-${colorMap[color]}`;
  }

  console.warn(`Missing color ${color} for background class`);

  return "";
};
