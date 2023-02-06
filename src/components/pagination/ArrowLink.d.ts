import { PaginationBase, Item } from './index';
interface ArrowLink extends PaginationBase {
  data?: Item;
  direction: 'left' | 'right';
}
declare const ArrowLink: ({ data, direction, as }: ArrowLink) => JSX.Element | null;
export default ArrowLink;
