interface BadgeProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative' | 'senary' | 'primary-tint-7' | 'tertiary-shade-110';
  icon?: string;
  size?: 's' | 'l' | 'xl';
}
/**
 * Badges are labels which hold small amounts of information. See [here](https://randstad.design/components/core/badge/)
 *
 */
declare function Badge({ children, color, icon, size }: BadgeProps): JSX.Element;
export default Badge;
