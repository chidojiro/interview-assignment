type NoticeType = 'negative' | 'informative' | 'positive' | 'warning' | 'subtle';
interface NoticeProps {
  children: string | JSX.Element;
  type: NoticeType;
  icon?: string;
}
declare function Notice({ children, type, icon }: NoticeProps): JSX.Element;
export default Notice;
