export type TextNoticeBackground = 'tint-7' | 'primary-tint-7' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary';

export type CloseEvents = React.MouseEvent | KeyboardEvent | TouchEvent;

export interface TextNoticeProps {
  children: string | JSX.Element | (string | JSX.Element)[];
  background: TextNoticeBackground;
  backgroundClass?: string;
  icon?: string;
  ariaLabelClose?: string;
  onClose?: () => void;
}
