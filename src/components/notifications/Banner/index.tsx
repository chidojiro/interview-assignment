import React, {
  useRef, isValidElement, cloneElement, ReactElement,
  useId,
} from 'react';
import cn from 'classnames';
import { Closable } from '@ffw/randstad-local-orbit/original/js/components/closable';

import Img from '../../common/Img';
import Svg from '../../common/Svg';
import './Banner.scss';

interface BannerProps {
  title: string;
  type?: 'general' | 'error';
  button?: React.ReactElement;
  children: React.ReactNode;
  /** In case React.useId() cause any issues, this can override it. */
  id?: string;
  /** Its trigger on clicking X button. */
  onClose: () => void;
  /** Hide the close button on desktop. */
  hideCloseButtonOnDesktop?: boolean;
}

function Banner({
  title, button, children, onClose, hideCloseButtonOnDesktop, id: propId, type = 'general',
}: BannerProps) {
  const buttonRef = useRef(null);
  const generatedId = useId();
  const id = propId || generatedId;

  React.useEffect(() => {
    if (!buttonRef.current) return;
    new Closable(buttonRef.current);
  }, []);

  const notificationId = `data-rs-notification-${id.replaceAll(':', '')}`;

  const renderedButton = button && isValidElement(button as ReactElement) ? (
    <>
      {/* Mobile Button */}
      {cloneElement((button as ReactElement), {
        className: cn(button.props.className, 'button button-m hidden--from-l button--full-width'),
      })}
      {/* Desktop Button */}
      {cloneElement((button as ReactElement), {
        className: cn(button.props.className, 'button button-m hidden--until-l'),
      })}
    </>
  ) : null;

  const isGeneralType = type === 'general';
  const isErrorType = type === 'error';

  return (
    <div className={cn('marketing-message block notice-alert notice-alert__closable fixed w-full', isErrorType ? 'bg-variant-brand-alert' : 'bg-variant-brand-primary')} {...{ [notificationId]: '' }}>
      <div className="wrapper notice-alert__wrapper">
        <div className="notice-alert__content l:grid l:grid-cols-12">
          <div className={cn(isGeneralType ? 'col-span-6' : 'col-span-7')}>
            <div className="title" data-rs-closable-fadeout="">
              {isErrorType ? (
                <div className="flex">
                  <Img src="warning.svg" alt="warning icon" className="mr-xs" />
                  {title}
                </div>
              ) : title}
            </div>
            <div className="notice-alert__close" data-rs-closable-fadeout="">
              <button
                onClick={() => onClose()}
                ref={buttonRef}
                type="button"
                className={cn('button--icon-only', hideCloseButtonOnDesktop && 'hidden--from-l')}
                aria-label="close"
                data-rs-closable={notificationId}
              >
                <span className="icon icon--inline">
                  <Svg icon="close-30" />
                </span>
              </button>
            </div>
            <div className="notice-alert__description col-span-6" data-rs-closable-fadeout="">
              <div className="description">{children}</div>
              { renderedButton }
            </div>
          </div>
          {isGeneralType && (
            <div className="col-span-3 col-start-9">
              <div className="hidden--until-l">
                <Img src="speaker.svg" alt="speaker" className="mr-xs" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
