interface SummaryCardProps {
  title: string;
  emptyMessage: string;
  count: number;
  tabIndex: number;
  message?: string;
  onClick?: (e: React.UIEvent<HTMLSpanElement>) => void;
  stars?: boolean;
  clickAreaAriaLabel?: string;
}

export default SummaryCardProps;
