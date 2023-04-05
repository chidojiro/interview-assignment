import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

type CloseEvents = React.MouseEvent | KeyboardEvent | TouchEvent | Event;
interface ModalProps {
  title: string;
  ariaLabelClose?: string;
  children?: string | React.ReactNode;
  onClose?: (event: CloseEvents) => void;
  footer?: React.ReactNode;
  footerDivider?: boolean;
  footerDividerTop?: boolean;
  modalOverflow?: boolean;
}

function Modal({
  // needConfirm,
  title,
  onClose,
  ariaLabelClose,
  children,
  footer,
  footerDivider = true,
  footerDividerTop = false,
  modalOverflow = false,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { Modal: ModalJS } = require('@ffw/randstad-local-orbit/js/components/modal');
    const ModalJSInit = new ModalJS(modalRef.current);
    ModalJSInit.openModal(true);
    const modalElement = modalRef.current;

    let timer: ReturnType<typeof setTimeout>;

    const closingModal = (event: Event) => {
      timer = setTimeout(() => {
        /* onClose is for side-effects in the apps where you use the modal. */
        onClose?.(event);
        ModalJSInit.closeModal(true);
      }, 350);
    };

    // Handle X button event.
    modalElement?.addEventListener('modal-close', closingModal);

    return () => {
      modalElement?.removeEventListener('modal-close', closingModal);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div ref={modalRef} className="modal" data-rs-modal="modal">
      <div
        className="modal__dialog bg-variant-brand-tertiary"
        role="dialog"
        aria-modal="true"
        aria-labelledby="#"
        data-rs-modal-dialog=""
      >
        <div className="modal__header" data-rs-modal-header="">
          <div className="modal__title">{title}</div>
          <button
            className="button--icon-only modal__close"
            data-rs-modal-close-trigger=""
            aria-label={ariaLabelClose}
            type="button"
          >
            <Icon iconClassName={classNames('icon icon--inline hidden--from-l icon--alternative')} iconType="close" />
            <Icon iconClassName={classNames('icon icon--l icon--inline hidden--until-l icon--alternative')} iconType="close-30" />
          </button>
        </div>
        <div className={`modal__main ${modalOverflow ? 'modal__main--overflow' : ''}`} data-rs-modal-main="">
          {children}
        </div>
        <div className={`modal__footer ${footerDivider ? 'divider' : ''} ${footerDividerTop ? 'divider--top' : ''}`} data-rs-modal-footer="">
          {footer}
        </div>
      </div>
    </div>
  );
}

export default Modal;
