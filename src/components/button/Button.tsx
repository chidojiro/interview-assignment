import React from "react";
import classNames from "classnames";

interface ButtonProps {
  children?: string;
  handleClick?: any;
  type?: ButtonTypes;
  size?: "small";
  variant?: ButtonVariants;
  dark?: boolean;
  disabled?: boolean;
  icon?: string;
  loader?: boolean;
  fullWidth?: boolean;
  href?: string;
  svgClasses?: string;
  className?: string;
}

type ButtonTypes = "button" | "submit" | "reset";

type ButtonVariants = "filled" | "plain";

const buttonBaseClass = "button";

/**
 * Provides a simple way to trigger an event or to interact with the environment.
 * See [here](https://randstad.design/components/core/buttons/)
 *
 */
function Button({
  children,
  handleClick,
  type = "button",
  size,
  variant,
  dark,
  disabled,
  icon,
  loader,
  fullWidth,
  href,
  svgClasses,
  className,
}: ButtonProps) {
  const ButtonTag = href ? "a" : "button";
  const hrefTypeAttribute = href ? { href: href } : { type: type };
  const onClickAttribute = handleClick ? { onClick: handleClick } : {};

  return (
    <ButtonTag
      className={classNames(`${buttonBaseClass} ${className}`, {
        [`${buttonBaseClass}--s`]: size === "small",
        [`${buttonBaseClass}--filled`]: variant === "filled",
        [`${buttonBaseClass}--plain`]: variant === "plain",
        [`${buttonBaseClass}--dark-blue`]: dark,
        [`${buttonBaseClass}--disabled`]: disabled,
        [`${buttonBaseClass}--preloader`]: loader,
        [`${buttonBaseClass}--icon`]: !children,
        [`${buttonBaseClass}--full-width`]: fullWidth,
      })}
      {...hrefTypeAttribute}
      {...onClickAttribute}>
      {icon && (
        <span className={classNames("icon", { "icon--inline": children })}>
          <svg className={svgClasses}>
            <use xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${icon}`}></use>
          </svg>
        </span>
      )}
      {loader && <span className="dots"></span>}
      {!loader && children}
    </ButtonTag>
  );
}

export default Button;
