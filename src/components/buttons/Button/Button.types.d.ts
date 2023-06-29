type ButtonTypes = 'button' | 'submit' | 'reset';

export type ButtonVariants = 'filled' | 'plain';

interface ButtonProps {
  children?: string | React.ReactNode;
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
  RouterComponent?: React.FC<any>;
  [x: string]: any;
}
