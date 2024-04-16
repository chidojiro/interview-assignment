import { ButtonVariants } from '../../buttons/Button/Button.types';
import { BgColor } from '../../../utils/getBackground/getBackground.types';

type CloseEvents = React.MouseEvent | TouchEvent;

interface ToastProps extends Partial<BgColor> {
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
