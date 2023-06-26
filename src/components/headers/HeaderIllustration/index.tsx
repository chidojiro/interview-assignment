import React from 'react';
import cn from 'classnames';
import { getBackground } from '../../../utils/getBackground';
import { HeaderIllustrationProps } from './HeaderIllustration.types';

function HeaderIllustration({
  illustration,
  illustrationClasses,
  narrowIllustration,
  altTitle,
  bgColor = 'primary',
  title,
  titleClasses,
  description,
  buttonLink,
  buttonText,
}: HeaderIllustrationProps) {
  const backgroundColor = getBackground(bgColor);
  const headerClassNames = cn(
    'header',
    backgroundColor,
  );
  const illustrationClassNames = cn(
    'header__media',
    'media-block',
    'media-block--animation',
    'order-1',
    'l:order-4',
    'l:px-none',
    {
      'px-m': !narrowIllustration,
      'px-xl': narrowIllustration,
    },
    illustrationClasses,
  );

  const displayIllustration = illustration && (
    <img
      src={illustration}
      alt={altTitle}
    />
  );

  return (
    <div className={headerClassNames}>
      <div className="header__wrapper wrapper flex flex-wrap">
        <div className={`header__content header__content--l content-block ${titleClasses || 'l:pt-none order-2 l:order-3'}`}>
          {title && <h1 className="content-block__title">{title}</h1>}
          {description && (
            <p className="content-block__description text-body-m l:text-body-l">
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <a href={buttonLink} className="button">
              {buttonText}
            </a>
          )}
        </div>
        <div className={illustrationClassNames}>
          {displayIllustration}
        </div>
      </div>
    </div>
  );
}

export default HeaderIllustration;
