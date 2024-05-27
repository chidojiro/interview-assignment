import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Icon from '../../common/Icon';
import { ModalProps } from './Modal.types';
import '../../../assets/scss/modal.scss';

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
  fullScreen = false,
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

  const modalClasses = classNames('modal', {
    'p-none': fullScreen,
  });

  const modalDialogClasses = classNames(
    'modal__dialog',
    bgVariantBrand || 'bg-variant-brand-tertiary',
    { 'w-full h-full rounded-none': fullScreen }
  );

  const modalMainClasses = classNames('modal__main', {
    'modal__main--overflow': modalOverflow,
    'p-none': fullScreen,
    'mb-m': !footer,
  });

  const modalFooterClasses = classNames('modal__footer', {
    'divider': footerDivider,
    'divider--top': footerDividerTop,
  });

  return (
    <div
      ref={modalRef}
      className={modalClasses}
      data-rs-modal="modal"
      {...additionalAttributes}
    >
      <div
        className={modalDialogClasses}
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
        <div className={modalMainClasses} data-rs-modal-main="">
          {children}
        </div>
        {footer ? (
          <div className={modalFooterClasses} data-rs-modal-footer="">
            {footer}
          </div>
        )
          : null }
      </div>
    </div>
  );
}

export default Modal;
