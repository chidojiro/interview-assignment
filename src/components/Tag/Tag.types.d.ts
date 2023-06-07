export interface TagProps {
  id: string;
  title: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'normal';
  areaLabel?: string;
}
