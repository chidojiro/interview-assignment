import React, { useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';
import styles, { keyframes } from 'styled-components';
import Icon from '../Icon';

type CloseEvents = React.MouseEvent | KeyboardEvent | TouchEvent;
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

const popupEnter = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const popupEnterExit = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const popupEnterDone = keyframes`
  0% { transform: translateY(10%) }
  100% { transform: none; }
`;

const popupEnterDoneExit = keyframes`
  0% { transform: none; }
  100% { transform: translateY(10%) }
`;

const styleProps = `
    animation-duration: 0.3s;
    animation-timing-function: ease;
`;

const ModalStyle = styles.div`
  & {
    animation-name: ${popupEnter};
    ${styleProps}
  }

  & .modal__dialog {
    animation-name: ${popupEnterDone};
    ${styleProps}
  }

  &.modal-exit {
    animation-name: ${popupEnterExit};
    ${styleProps}
  }

  &.modal-exit .modal__dialog {
    animation-name: ${popupEnterDoneExit};
    ${styleProps}
  }

`;

function Modal({
  title,
  onClose,
  ariaLabelClose,
  children,
  footer,
  footerDivider = true,
  footerDividerTop = true,
  modalOverflow = true,
}: ModalProps) {
  const onClickHandler = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };
  const modalRef = useRef<HTMLDivElement>(null);

  const modalClose = useCallback(
    (event: CloseEvents) => {
      if (event instanceof KeyboardEvent && event.key !== 'Escape') return;
      event.preventDefault();
      event.stopPropagation();
      if (modalRef && modalRef.current) {
        modalRef.current.classList.add('modal-exit');
      }
      setTimeout(() => {
        onClose?.(event);
      }, 200);
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', modalClose);
    return () => document.removeEventListener('keydown', modalClose);
  }, [modalClose]);

  return (
    <ModalStyle ref={modalRef} className="modal modal--active" data-rs-modal="modal" onClick={(event: React.MouseEvent<HTMLDivElement>) => modalClose(event)}>
      {/* Tag <div> needed here according to the Orbit */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <div
        onClick={(event: React.MouseEvent<HTMLDivElement>) => onClickHandler(event)}
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
        <div className={`modal__main body-copy ${modalOverflow ? 'modal__main--overflow' : ''}`} data-rs-modal-main="">
          {children}
        </div>
        <div className={`modal__footer ${footerDivider ? 'divider' : ''} ${footerDividerTop ? 'divider--top' : ''}`} data-rs-modal-footer="">
          {footer}
        </div>
      </div>
    </ModalStyle>
  );
}

export default Modal;
