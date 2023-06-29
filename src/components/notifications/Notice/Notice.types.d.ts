export type NoticeType = 'negative' | 'informative' | 'positive' | 'warning' | 'subtle';

export interface NoticeProps {
  children: string | JSX.Element | (string | JSX.Element)[];
  type: NoticeType;
  icon?: string;
}
