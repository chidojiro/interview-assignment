export interface ShowMoreToggleInterface {
  items: unknown[] | [];
  handleClick: () => void;
  translations: {
    viewAll: string;
    viewLess: string;
  };
  isViewAllOpen: boolean;
  maxItemsShown?: number;
}
