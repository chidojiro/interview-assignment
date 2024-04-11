export type CloseEvents = React.MouseEvent | KeyboardEvent | TouchEvent | Event;

export interface ModalProps {
  title: string;
  ariaLabelClose?: string;
  children?: string | React.ReactNode;
  onClose?: (event: CloseEvents) => void;
  footer?: React.ReactNode;
  footerDivider?: boolean;
  footerDividerTop?: boolean;
  modalOverflow?: boolean;
  bgVariantBrand?: string | undefined;
  disableBrowserHistory?: boolean;
  fullScreen?: boolean;
}
