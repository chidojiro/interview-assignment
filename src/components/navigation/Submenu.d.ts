import { Items } from './types';
interface SubmenuItems extends Items {
  children: Items[];
}
interface Submenu {
  items?: SubmenuItems[];
}
declare const Submenu: ({ items }: Submenu) => JSX.Element | null;
export default Submenu;
