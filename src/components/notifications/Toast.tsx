import React, { useState, useCallback, useEffect } from 'react';
import Icon from '../Icon';
import Button from '../button/Button';

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
}

function Toast({ title, anchor, id, buttonCloseText, buttonSuccessText, ariaLabelClose = 'close', labelClose = 'close', onSuccess, onClose }: ToastProps) {
  const [closeToast, setCloseToast] = useState('');

  const attributes = {
    "data-rs-toast": id,
    [`data-rs-toast-${id}`]: "",
  };

  if (anchor) {
    attributes["data-rs-toast-anchor"] = anchor;
  }

  const toastClose = useCallback(
    (event: CloseEvents) => {
      event.preventDefault();
      event.stopPropagation();
      setCloseToast('closable--closed');
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, 200);
    },
    [onClose],
  );

  const toastSubmit = useCallback(
    (event: CloseEvents) => {
      event.preventDefault();
      event.stopPropagation();
      setCloseToast('closable--closed');
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
      }, 200);
    },
    [onSuccess],
  );

  useEffect(() => {
    if(buttonCloseText || buttonSuccessText) {
        return;
    }
    const timer = setTimeout(() => {
      setCloseToast('closable--closed');
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, 200);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [setCloseToast, onClose, buttonCloseText, buttonSuccessText]);

  return (
    <>
      <div className={`toast bg-variant-brand-secondary show toast--active ${closeToast}`}  {...attributes}>
        <p className="toast__message">{title}</p>
        {(buttonCloseText || buttonSuccessText) && (
          <div className="toast__cta">
            {buttonCloseText && (
              <Button href="#" small className="toast__cta" handleClick={(event: CloseEvents) => toastClose(event)}>
                {buttonCloseText}
              </Button>
            )}
            {buttonSuccessText && (
              <Button href="#" variant="filled" className="toast__cta ml-xs" small handleClick={(event: CloseEvents) => toastSubmit(event)}>
                {buttonSuccessText}
              </Button>
            )}
          </div>
        )}
        <button
          className="button--icon-only"
          aria-label={ariaLabelClose}
          data-rs-closable={`data-rs-toast-${id}`}
          tabIndex={0}
          onClick={(event: CloseEvents) => toastClose(event)}
        >
          <Icon iconClassName="icon" iconType="close-30" />
          <span className="hidden--visually">{labelClose}</span>
        </button>
      </div>
    </>
  );
}

export { Toast };
