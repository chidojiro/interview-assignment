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
