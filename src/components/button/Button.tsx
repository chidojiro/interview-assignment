import React from "react";
import classNames from "classnames";

interface ButtonProps {
  children?: string;
  handleClick?: any;
  type?: ButtonTypes;
  size?: "small";
  variant?: ButtonVariants;
  dark?: boolean;
  disabled?: false;
  icon?: string;
  loader?: false;
  fullWidth?: false;
  href?: string;
  svgClasses?: string;
}

type ButtonTypes = "button" | "submit" | "reset";

type ButtonVariants = "filled" | "plain";

const buttonClass = "button";

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
}: ButtonProps) {
  const ButtonTag = href ? "a" : "button";
  const typeAttribute = !href ? { type: type } : {};
  const hrefAttribute = href ? { href: href } : {};
  const onClickAttribute = handleClick && { onClick: handleClick };

  return (
    <ButtonTag
      className={classNames(buttonClass, {
        [`${buttonClass}--s`]: size,
        [`${buttonClass}--filled`]: variant === "filled",
        [`${buttonClass}--plain`]: variant === "plain",
        [`${buttonClass}--dark-blue`]: dark,
        [`${buttonClass}--disabled`]: disabled,
        [`${buttonClass}--preloader`]: loader,
        [`${buttonClass}--icon`]: !children,
        [`${buttonClass}--full-width`]: fullWidth,
      })}
      {...typeAttribute}
      {...hrefAttribute}
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
