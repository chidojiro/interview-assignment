export interface AccordionItemInterface {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  expanded?: boolean;
  HeadingTag?: keyof JSX.IntrinsicElements;
  ariaLabel?: string;
  id?: string;
}
