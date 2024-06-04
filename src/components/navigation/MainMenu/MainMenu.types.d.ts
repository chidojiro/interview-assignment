import { Items } from '../navigation.types';
import { HeaderProps } from '../../headers/Header/Header.types';

export interface MainMenuProps {
  items: Items[];
  showChildren?: Pick<HeaderProps, 'showChildren'> | boolean;
}
