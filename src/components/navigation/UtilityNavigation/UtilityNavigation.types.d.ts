interface MenuItemsBase {
  title: string;
  url: string;
}

export interface MenuItems extends MenuItemsBase {
  children: MenuItemsBase[];
}

export interface UtilityNavigationProps {
  items?: MenuItems[];
}
