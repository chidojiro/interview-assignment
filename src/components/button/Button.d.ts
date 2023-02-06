import React from 'react';
type ButtonTypes = 'button' | 'submit' | 'reset';
type ButtonVariants = 'filled' | 'plain';
interface ButtonProps {
  children?: string;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: ButtonTypes;
  small?: boolean;
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
/**
 * Provides a simple way to trigger an event or to interact with the environment.
 * See [here](https://randstad.design/components/core/buttons/)
 *
 */
declare function Button({
  children,
  handleClick,
  type,
  small,
  variant,
  dark,
  disabled,
  icon,
  loader,
  fullWidth,
  href,
  svgClasses,
  className,
}: ButtonProps): JSX.Element;
export default Button;
