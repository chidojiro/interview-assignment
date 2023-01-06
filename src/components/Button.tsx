import React from "react";

type ButtonVariants = "ghost" | "ghost-icon" | "ghost-social" | "filled" | "filled-icon" | "icon" | "plain" | "plain-icon"

interface ButtonBase extends React.ComponentPropsWithoutRef<"button"> {
  fullWidth?: boolean,
  color?: "dark-blue" | "off-white" | "white",
  icon?: string,
  preloader?: boolean,
  className?: string,
}

interface ButtomS extends ButtonBase {
  size?: "s",
  variant?: Extract<ButtonVariants, "ghost" | "ghost-icon" | "filled" | "filled-icon" | "plain" | "plain-icon">
}

interface ButtomM extends ButtonBase {
  size?: "m",
  variant?: ButtonVariants
}

interface ButtomL extends ButtonBase {
  size?: "l"
  variant?: Extract<ButtonVariants, "ghost" | "filled" | "plain">
}

type Button = React.PropsWithChildren<ButtomL | ButtomS | ButtomM>;

/**
 * Provides a simple way to trigger an event or to interact with the environment. See [here](https://randstad.design/components/core/buttons/)
 *
 */
function Button({
  children,
  size = "m",
  fullWidth,
  color,
  variant = "ghost",
  icon,
  preloader,
  className = "",
  ...props
}: Button) {
  const buttonClasses = ["button", ...className.split(" ")];
  const svgClasses = [];
  let showIcon = false;
  let showPreloader = false;
  let showText = true;
  let showButtonText = false;
  let iconName = icon;
  const largeSize = size !== "s" && size !== "m";

  if (
    size === "s" &&
    !["ghost", "ghost-icon", "filled", "filled-icon", "plain", "plain-icon"].includes(variant)
  ) {
    console.warn(`Your type ${variant} is not supported by the small size`);
    return null;
  } else if (largeSize && !["ghost", "filled", "plain"].includes(variant)) {
    console.warn(`Your type ${variant} is not supported by the large size`);
    return null;
  }

  switch (variant) {
    case "ghost-icon":
      showIcon = true;
      break;

    case "ghost-social":
      showIcon = true;
      iconName = `social-btn-${icon}`;
      buttonClasses.push(`button--social`);
      svgClasses.push(`icon-${icon}`);
      break;

    case "filled":
      buttonClasses.push(`button--filled`);
      break;

    case "filled-icon":
      buttonClasses.push(`button--filled`);
      showIcon = true;
      break;

    case "icon":
      buttonClasses.push(`button--filled`);
      buttonClasses.push(`button--icon`);
      showIcon = true;
      showButtonText = true;
      showText = false;
      break;

    case "plain":
      buttonClasses.push(`button--plain`);
      break;

    case "plain-icon":
      buttonClasses.push(`button--plain`);
      showIcon = true;
      break;

    default:
      break;
  }

  if (!largeSize) {
    buttonClasses.push(`button--${size}`);
  }

  if (color) {
    buttonClasses.push(`button--${color}`);
  }

  if (fullWidth) {
    buttonClasses.push(`button--full-width`);
  }

  if (preloader) {
    showPreloader = true;
    showText = false;
    showIcon = false;
    buttonClasses.push(`button--preloader`);
  }

  return (
    <button className={buttonClasses.join(" ")} type="button" {...props}>
      {showButtonText && <span className="button__text">{children}</span>}
      {showIcon && (
        <span className={`icon ${variant !== "icon" ? "icon--inline" : ""}`}>
          <svg className={svgClasses.join(" ")}>
            <use xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${iconName}`}></use>
          </svg>
        </span>
      )}
      {showPreloader && <span className="dots"></span>}
      {showText && children}
    </button>
  );
}

export default Button;