import t from 'prop-types';
interface MenuItemsBase {
  title: string;
  url: string;
}
interface MenuItems extends MenuItemsBase {
  children: MenuItemsBase[];
}
export interface UtilityNavigationProps {
  items?: MenuItems[];
}
declare const UtilityNavigation: {
  ({ items }: UtilityNavigationProps): JSX.Element | null;
  propTypes: {
    items: t.Requireable<any[]>;
  };
};
export default UtilityNavigation;
