export type PromoteAppBannerBackground = 'tint-7' | 'primary-tint-7' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary';

export type CloseEvents = React.MouseEvent | KeyboardEvent | TouchEvent;

export type PromoteAppBannerType = 'no-image' | 'split-view' | 'full-width';

export interface PromoteAppBannerProps {
  children: string | JSX.Element | (string | JSX.Element)[];
  background?: PromoteAppBannerBackground;
  backgroundClass?: string;
  icon?: string;
  ariaLabelClose?: string;
  onClose?: () => void;
  type?: PromoteAppBannerType;
  imagePath?: string;
  imageAlt?: string;
  isClosable?: boolean;
  appleLink: string;
  googlePlayLink: string;
}
