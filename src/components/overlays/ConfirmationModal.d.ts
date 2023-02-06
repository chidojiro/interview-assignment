import React from 'react';
type CloseEvents = React.MouseEvent | KeyboardEvent | TouchEvent;
interface ConfirmationModalProps {
  title: string;
  content: string;
  ariaLabelClose?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClose: (event: CloseEvents) => void;
  onSubmit?: (event: React.MouseEvent) => void;
}
declare function ConfirmationModal({
  title,
  content,
  onClose,
  onSubmit,
  ariaLabelClose,
  confirmButtonText,
  cancelButtonText,
}: ConfirmationModalProps): JSX.Element;
export default ConfirmationModal;
