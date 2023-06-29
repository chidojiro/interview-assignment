import { Item, PaginationBase } from '../Pagination/Pagination.types';

interface LinkElementProps extends PaginationBase, React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode;
  props: Omit<Item, 'text'> & Partial<Pick<Item, 'text'>>;
}
