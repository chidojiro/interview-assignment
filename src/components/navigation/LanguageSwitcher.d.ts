interface Items {
  language: string;
  isActive?: boolean;
  url?: string;
}
export interface LanguageSwitcherProps {
  items: Items[];
  extraClasses?: string;
}
declare const LanguageSwitcher: ({ items, extraClasses }: LanguageSwitcherProps) => JSX.Element | null;
export default LanguageSwitcher;
