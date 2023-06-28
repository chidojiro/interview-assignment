import { Item, PaginationBase } from '../Pagination/Pagination.types';

export interface ArrowLinkProps extends PaginationBase {
  data?: Item;
  direction: 'left' | 'right';
}
