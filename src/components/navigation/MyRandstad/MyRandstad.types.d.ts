import { UserNameProps } from '../../headers/LoginPopover/LoginPopover.types';

export interface MyRandstadProps {
  show?: boolean;
  isAuth: boolean;
  label: string | React.ReactNode;
  userName?: UserNameProps;
  userImgUrl?: string;
  trackLoginPopoverOpen: boolean;
  trackLoginPopoverEvent: (open: boolean) => void;
  hiddenLabel?: boolean;
}
