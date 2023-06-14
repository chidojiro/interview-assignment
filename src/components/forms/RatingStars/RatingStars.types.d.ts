import { ChangeEventHandler, ReactNode } from 'react';

export interface StarItem {
  id: string;
  name: string;
}
export interface RatingStarsProps {
  name: string;
  value: string;
  error?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  stars: StarItem[];
  label: string;
}
