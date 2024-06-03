export interface QuickLinkCardProps {
  title: string;
  tabIndex: number;
  description?: string;
  url: string;
  onClick?: (e: React.UIEvent<HTMLSpanElement>) => void;
  clickAreaAriaLabel?: string;
}
