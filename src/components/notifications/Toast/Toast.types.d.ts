import { ButtonVariants } from '../../button/Button';

type CloseEvents = React.MouseEvent | TouchEvent;

interface ToastProps {
  id: string;
  title: string;
  anchor?: string;
  buttonCloseText?: string;
  buttonSuccessText?: string;
  ariaLabelClose?: string;
  labelClose?: string;
  onClose?: () => void;
  onSuccess?: () => void;
  successBtnVariant?: ButtonVariants;
}
