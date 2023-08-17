export interface Items {
  language: string;
  isActive?: boolean;
  url?: string;
  filters?: object;
}

export interface LanguageSwitcherProps {
  items: Items[];
  extraClasses?: string;
  useToast?: boolean;
  toastSettings?: {
    id: string;
    title: Record<string, string>;
    buttonSuccessText: Record<string, string>;
    buttonCloseText: Record<string, string>;
  };
}
