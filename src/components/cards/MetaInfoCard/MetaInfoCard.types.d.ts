import { BgColor } from '../../../utils/getBackground/getBackground.types';

export interface MetaInfoCardProps extends Partial<BgColor> {
  title?: string;
  titleColor?: string;
  children: React.ReactNode | React.ReactNode[] | [];
}
