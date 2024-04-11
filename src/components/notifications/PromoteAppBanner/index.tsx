import React, { useCallback, useState } from 'react';
import { Closable } from '@ffw/randstad-local-orbit/original/js/components/closable';
import classNames from 'classnames';
import Icon from '../../common/Icon';
import { CloseEvents, PromoteAppBannerProps } from './PromoteAppBanner.types';
import '../../../assets/scss/promote-app-banner.scss';

function PromoteAppBanner({
  children,
  background = 'primary',
  backgroundClass = 'bg-variant-brand',
  icon,
  ariaLabelClose = 'close',
  onClose,
  isClosable = true,
  type = 'no-image',
  imagePath,
  imageAlt = '',
  appleLink,
  googlePlayLink,
}: PromoteAppBannerProps) {
  const [closable, setClosable] = useState(false);
  const promoteAppBannerClose = useCallback(
    (event: CloseEvents) => {
      event.preventDefault();
      event.stopPropagation();
      setClosable(true);
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, 200);
    },
    [onClose],
  );

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    new Closable(ref.current);
  }, []);

  const appleIconPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? '/img/apple-store.png' : `${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/apple-store.png`;
  const googleIconPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? '/img/google-play.png' : `${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/google-play.png`;

  let typeClassesWrapper = '';

  if (type === 'split-view' || type === 'full-width') {
    typeClassesWrapper = `bluex-promote-app__${type}`;
  }

  return (
    <div className={`block ${backgroundClass}-${background} notice-text-only bluex-promote-app ${isClosable ? 'notice-text-only__closable' : ''} ${closable ? 'closable--closed' : ''} ${typeClassesWrapper}`} data-rs-promotional-app-banner>
      <div className="wrapper notice-text-only__wrapper">
        <div className="notice-text-only__content body-copy">
          {isClosable && (
            <div className="notice-text-only__close" data-rs-closable-fadeout="">
              <button
                className="button--icon-only"
                aria-label={ariaLabelClose}
                tabIndex={0}
                onClick={(event: CloseEvents) => promoteAppBannerClose(event)}
                type="button"
                data-rs-closable="data-rs-promotional-app-banner"
                ref={ref}
              >
                <Icon iconClassName={classNames('icon icon--inline icon--alternative')} iconType="close" />
              </button>
            </div>
          )}
          <div className="notice-text-only__description" data-rs-closable-fadeout="">
            {icon && <Icon iconClassName="icon icon--inline icon--static" iconType={icon} />}
            <div className="description flex flex-wrap">
              <p className="mr-m self-center">
                {children}
              </p>
              <div className="store-icons flex">
                <a href={appleLink} title="Download on the App Store" target="_blank" rel="noreferrer">
                  <img className="apple-store__icon mr-xs" src={appleIconPath} alt="App store" />
                </a>
                <a href={googlePlayLink} title="Get it on Google Play" target="_blank" rel="noreferrer">
                  <img className="google-store__icon" src={googleIconPath} alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {imagePath && type !== 'no-image' && (
        <div className="bluex-promote-app__image hidden--until-l">
          <img src={imagePath} alt={imageAlt} />
        </div>
      )}
    </div>
  );
}

export default PromoteAppBanner;
