export type SocialLinkTypes = {
  url: string;
  title: string;
  icon: string;
};

export type IconsSizesTypes = {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

export interface SocialLinksTypes {
  items: SocialLinkTypes[];
  iconsSize?: string;
}
