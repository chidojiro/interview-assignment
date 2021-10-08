export const getBackground = (color) => {
  // Color map of Orbit color support old and new color name.
  const colorMap = {
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

  const sphColorMap = {
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
