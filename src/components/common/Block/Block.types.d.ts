export interface BlockProps {
  /** Rendered inside block_content */
  children: React.ReactNode;
  /** Rendered before block_content */
  beforeContent?: React.ReactNode;
  /** Rendered after block_content */
  afterContent?: React.ReactNode;
  typeFilter?: boolean;
  smallContentSize?: boolean;
  align?: 'left' | 'right';
  title?: string;
  stacked?: boolean;
  blockHeaderClasses?: string;
  blockContentClasses?: string;
}
