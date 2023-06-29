import { Items } from '../navigation.types';

export interface SubmenuItems extends Items {
  children: Items[];
}

export interface SubmenuProps {
  items?: SubmenuItems[];
  RouterComponent?: React.FC<any>;
}
