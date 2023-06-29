import { KeyboardEvent } from 'react';

export interface ShowMoreProps {
  onClick: (event: React.MouseEvent | KeyboardEvent) => void;
  listLength: number;
  totalLength: number;
  ariaLabel: string;
  textSeen: string;
  textViewMore: string;
  classButton?: string;
  loading: boolean;
}
