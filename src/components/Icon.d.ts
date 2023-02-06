interface IconProps {
  iconType: string;
  iconClassName?: string;
  svgProps?: object;
  rest?: object;
}
/**
 * Used for displaying icons.
 * @returns SVG icon
 */
declare function Icon({ iconType, iconClassName, svgProps, ...rest }: IconProps): JSX.Element;
export default Icon;
