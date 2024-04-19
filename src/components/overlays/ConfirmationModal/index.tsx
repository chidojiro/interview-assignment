import React, { useEffect, useCallback } from 'react';
import classNames from 'classnames';
import Icon from '../../common/Icon';
import Button from '../../buttons/Button';
import { CloseEvents, ConfirmationModalProps } from './ConfirmationModal.types';

function ConfirmationModal({
  title = 'are you sure?',
  content,
  onClose,
  onCancelClick,
  onSubmit,
  ariaLabelClose = 'close',
  confirmButtonText = 'yes',
  cancelButtonText = 'cancel',
  onXClicked,
}: ConfirmationModalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const modalButtonsGroupRef = React.useRef<HTMLDivElement>(null);

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
        onClose?.(event as CloseEvents);
      }, 350);
      if (onXClicked) {
        onXClicked();
      }
    };

    // Handle X button event.
    modalElement?.addEventListener('modal-close', closingModal);

    // Trigger Orbit ModalJS close when there's a click on the cancel button.
    const modalCancelElement = modalButtonsGroupRef.current?.querySelector('.modal__cancel');
    modalCancelElement?.addEventListener('click', closingModal);

    return () => {
      modalElement?.removeEventListener('modal-close', closingModal);
      modalCancelElement?.removeEventListener('click', closingModal);
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

  const modalClose = useCallback(
    (event: CloseEvents) => {
      if (event instanceof KeyboardEvent && event.key !== 'Escape') return;
      event.preventDefault();
      event.stopPropagation();
      setTimeout(() => {
        onClose?.(event);
      }, 200);
    },
    [onClose],
  );

  const modalCancel = useCallback(
    (event: CloseEvents) => {
      event.preventDefault();
      event.stopPropagation();
      setTimeout(() => {
        onCancelClick?.(event);
      }, 200);
    },
    [onCancelClick],
  );

  return (
    <div
      ref={modalRef}
      className="modal"
      data-rs-modal="modal"
    >
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
            onClick={(event: CloseEvents) => modalClose(event)}
          >
            <Icon iconClassName={classNames('icon icon--inline hidden--from-l icon--alternative')} iconType="close" />
            <Icon iconClassName={classNames('icon icon--l icon--inline hidden--until-l icon--alternative')} iconType="close-30" />
          </button>
        </div>
        <div className="modal__main" data-rs-modal-main="">
          <p className="form__header">{content}</p>
        </div>
        <div className="modal__footer divider" data-rs-modal-footer="">
          <div ref={modalButtonsGroupRef} className="button-group button-group--full-width hidden--from-l">
            <Button href="#" variant="filled" fullWidth handleClick={onSubmit}>
              {confirmButtonText}
            </Button>
            <Button className="modal__cancel" href="#" variant="plain" fullWidth handleClick={(event: CloseEvents) => modalCancel(event)}>
              {cancelButtonText}
            </Button>
          </div>
          <div ref={modalButtonsGroupRef} className="button-group hidden--until-l button-group--options">
            <Button href="#" variant="filled" handleClick={onSubmit}>
              {confirmButtonText}
            </Button>
            <Button className="modal__cancel mr-xxs" href="#" variant="plain" handleClick={(event: CloseEvents) => modalCancel(event)}>
              {cancelButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
