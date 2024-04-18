export type CloseEvents = React.MouseEvent | KeyboardEvent | TouchEvent;

export interface ConfirmationModalProps {
  title: string;
  content: string;
  ariaLabelClose?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClose: (event: CloseEvents) => void;
  onCancelClick: (event: CloseEvents) => void;
  onSubmit?: (event: React.MouseEvent) => void;
  onXClicked?: () => void;
}
