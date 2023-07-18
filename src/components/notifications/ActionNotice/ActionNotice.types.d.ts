export type ActionNoticeBackground = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary';

export interface ActionNoticeProps {
  children: string | JSX.Element | (string | JSX.Element)[];
  background: ActionNoticeBackground;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick: (event: React.MouseEvent) => void;
  onSecondaryButtonClick?: (event: React.MouseEvent) => void;
  buttonsReversed?: boolean;
}
