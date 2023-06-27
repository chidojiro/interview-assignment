import React, { useState, useCallback, useEffect } from 'react';
import { Toast as OrbitComponent } from '@ffw/randstad-local-orbit/js/components/toast';
import Icon from '../../Icon';
import Button from '../../buttons/Button';
import { CloseEvents, ToastProps } from './Toast.types';

function Toast({
  title, anchor, id, buttonCloseText, buttonSuccessText, ariaLabelClose = 'close', labelClose = 'close', onSuccess, onClose, successBtnVariant,
}: ToastProps) {
  const [closeToast, setCloseToast] = useState('');

  const attributes = {
    'data-rs-toast': id,
    [`data-rs-toast-${id}`]: '',
  };

  if (anchor) {
    attributes['data-rs-toast-anchor'] = anchor;
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
    if (buttonCloseText || buttonSuccessText) {
      return undefined;
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

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.dataset.rendered) {
      ref.current.dataset.rendered = 'rendered';
      const toastInstance = new OrbitComponent(ref.current);
      toastInstance.show();
    }
  }, [id]);

  return (
    <div className={`toast bg-variant-brand-secondary show toast--active ${closeToast}`} {...attributes} ref={ref}>
      <p className="toast__message">{title}</p>
      {(buttonCloseText || buttonSuccessText) && (
        <div className="toast__cta">
          {buttonCloseText && (
            <Button href="#" small className="toast__cta" handleClick={(event: CloseEvents) => toastClose(event)}>
              {buttonCloseText}
            </Button>
          )}
          {buttonSuccessText && (
            <Button href="#" variant={successBtnVariant} className="toast__cta ml-xs" small handleClick={(event: CloseEvents) => toastSubmit(event)}>
              {buttonSuccessText}
            </Button>
          )}
        </div>
      )}
      <button
        type="button"
        className="button--icon-only"
        aria-label={ariaLabelClose}
        data-rs-closable={`data-rs-toast-${id}`}
        tabIndex={0}
        onClick={(event: CloseEvents) => toastClose(event)}
      >
        <Icon iconClassName="icon" iconType="close" />
        <span className="hidden--visually">{labelClose}</span>
      </button>
    </div>
  );
}

export default Toast;
