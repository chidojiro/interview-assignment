interface SummaryCardProps {
  title: string;
  emptyMessage: string;
  count: number;
  tabIndex: number;
  message?: string;
  onClick: (e: React.UIEvent<HTMLSpanElement>) => void;
}

export default SummaryCardProps;
