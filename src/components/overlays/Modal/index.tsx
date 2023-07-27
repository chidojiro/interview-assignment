import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Icon from '../../common/Icon';
import { ModalProps } from './Modal.types';

function Modal({
  title,
  onClose,
  ariaLabelClose,
  children,
  footer,
  footerDivider = true,
  footerDividerTop = false,
  modalOverflow = false,
  bgVariantBrand,
  disableBrowserHistory = false,
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
        ModalJSInit.closeModal(true);
        /* onClose is for side-effects in the apps where you use the modal. */
        onClose?.(event);
      }, 350);
    };

    // Handle X button event.
    modalElement?.addEventListener('modal-close', closingModal);

    return () => {
      modalElement?.removeEventListener('modal-close', closingModal);
      clearTimeout(timer);
      ModalJSInit.closeModal(true);
    };
    /**
     * ESLint requires adding onClose as a dependency, but we know that it
     * doesn't change and also we have wrapped it with useCallback from the
     * parent component.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const additionalAttributes: { [key:string]: string } = {};
  if (disableBrowserHistory) {
    additionalAttributes['data-rs-modal-disable-window-history'] = '';
  }

  return (
    <div
      ref={modalRef}
      className="modal"
      data-rs-modal="modal"
      {...additionalAttributes}
    >
      <div
        className={`modal__dialog ${bgVariantBrand || 'bg-variant-brand-tertiary'}`}
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
        <div className={`modal__main ${modalOverflow ? 'modal__main--overflow' : ''} ${footer ? null : 'mb-m'}`} data-rs-modal-main="">
          {children}
        </div>
        {footer ? (
          <div className={`modal__footer ${footerDivider ? 'divider' : ''} ${footerDividerTop ? 'divider--top' : ''}`} data-rs-modal-footer="">
            {footer}
          </div>
        )
          : null }
      </div>
    </div>
  );
}

export default Modal;
