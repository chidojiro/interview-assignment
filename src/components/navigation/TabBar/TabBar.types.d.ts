export type TabBarItem = {
  title: string;
  url: string;
  icon?: string;
  isActive: boolean;
};

export interface TabBarProps {
  items: Array<TabBarItem>;
  currentUrl?: string;
  isIconTabBar?: boolean;
  RouterComponent?: React.FC<any>;
}
