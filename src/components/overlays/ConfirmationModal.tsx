import React, { useEffect, useCallback } from 'react';
import classNames from 'classnames';
// import styles, { keyframes } from 'styled-components';
import Icon from '../Icon';
import Button from '../button/Button';

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

// const popupEnter = keyframes`
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// `;
//
// const popupEnterExit = keyframes`
//   0% { opacity: 1; }
//   100% { opacity: 0; }
// `;
//
// const popupEnterDone = keyframes`
//   0% { transform: translateY(10%) }
//   100% { transform: none; }
// `;
//
// const popupEnterDoneExit = keyframes`
//   0% { transform: none; }
//   100% { transform: translateY(10%) }
// `;
//
// const styleProps = `
//     animation-duration: 0.3s;
//     animation-timing-function: ease;
// `;
//
// const ModalStyle = styles.div`
//   & {
//     animation-name: ${popupEnter};
//     ${styleProps}
//   }
//
//   & .modal__dialog {
//     animation-name: ${popupEnterDone};
//     ${styleProps}
//   }
//
//   &.modal-exit {
//     animation-name: ${popupEnterExit};
//     ${styleProps}
//   }
//
//   &.modal-exit .modal__dialog {
//     animation-name: ${popupEnterDoneExit};
//     ${styleProps}
//   }
//
// `;

function ConfirmationModal({
  title = 'are you sure?',
  content,
  onClose,
  onSubmit,
  ariaLabelClose = 'close',
  confirmButtonText = 'yes',
  cancelButtonText = 'cancel',
}: ConfirmationModalProps) {
  const onClickHandler = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  const modalClose = useCallback(
    (event: CloseEvents) => {
      if (event instanceof KeyboardEvent && event.key !== 'Escape') return;
      event.preventDefault();
      event.stopPropagation();
      document.getElementsByClassName('modal')[0].classList.add('modal-exit');
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
    <React.Fragment>
      {/* Tag <div> needed here according to the Orbit */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <div
        onClick={(event: React.MouseEvent<HTMLDivElement>) => onClickHandler(event)}
        className='modal__dialog bg-variant-brand-tertiary'
        role='dialog'
        aria-modal='true'
        aria-labelledby='#'
        data-rs-modal-dialog=''
      >
        <div className='modal__header' data-rs-modal-header=''>
          <div className='modal__title'>{title}</div>
          <button
            className='button--icon-only modal__close'
            data-rs-modal-close-trigger=''
            aria-label={ariaLabelClose}
            type='button'
            onClick={(event: CloseEvents) => modalClose(event)}
          >
            <Icon iconClassName={classNames('icon icon--inline hidden--from-l icon--alternative')} iconType='close' />
            <Icon iconClassName={classNames('icon icon--l icon--inline hidden--until-l icon--alternative')} iconType='close-30' />
          </button>
        </div>
        <div className='modal__main' data-rs-modal-main=''>
          <p className='form__header'>{content}</p>
        </div>
        <div className='modal__footer divider' data-rs-modal-footer=''>
          <div className='button-group button-group--full-width hidden--from-l'>
            <Button href='#' variant='filled' fullWidth handleClick={onSubmit}>
              {confirmButtonText}
            </Button>
            <Button href='#' variant='plain' fullWidth handleClick={(event: CloseEvents) => modalClose(event)}>
              {confirmButtonText}
            </Button>
          </div>
          <div className='button-group hidden--until-l button-group--options'>
            <Button href='#' variant='filled' handleClick={onSubmit}>
              {confirmButtonText}
            </Button>
            <Button href='#' variant='plain' handleClick={(event: CloseEvents) => modalClose(event)}>
              {cancelButtonText}
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ConfirmationModal;
