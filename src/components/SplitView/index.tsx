import React from 'react';
import cn from 'classnames';
import { BgColor, getBackground } from '../../utils/getBackground';

export interface SplitViewProps extends BgColor {
  alternative?: boolean;
  illustration?: string;
  /**
   * The photos prop accepts an array of strings (use max of 3 array items).
   * First array item is the biggest image that goes into the IMG tag.
   * The next two items in the array goes into the SOURCE tags.
   */
  photos?: [string?, string?, string?];
  altTitle?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLink?: string;
  buttonText?: string;
}

function SplitView({
  alternative = false,
  illustration,
  photos,
  altTitle,
  bgColor = 'primary',
  eyebrow,
  title,
  description,
  buttonLink,
  buttonText,
}: SplitViewProps) {
  const backgroundColor = getBackground(bgColor);
  const mainClassNames = cn(
    'banner',
    backgroundColor,
    {
      'banner--alternative': alternative,
    },
  );
  const wrapperClassNames = cn(
    'wrapper',
    {
      'l:flex': illustration && !photos,
    },
  );
  const bannerClassNames = cn(
    'banner__media',
    'media-block',
    {
      'media-block--center': photos && !illustration,
      'media-block--half-width': photos && !illustration,
    },
  );

  const displayIllustration = illustration && (
    <img
      src={illustration}
      alt={altTitle}
    />
  );

  /* In progress. */
  const displayPhotos = photos && (
    <picture>
      {photos[1] && <source srcSet={photos[1]} media="(max-width: 940px)" />}
      {photos[2] && <source srcSet={photos[2]} media="(min-width: 941px)" />}
      { photos[0] && <img src={photos[0]} alt={altTitle} /> }
    </picture>
  );

  return (
    <div className={mainClassNames}>
      <div className={wrapperClassNames}>
        <div className={bannerClassNames}>
          {displayIllustration}
          {displayPhotos}
        </div>
        <div className="banner__content content-block">
          {eyebrow && <p className="content-block__eyebrow">{eyebrow}</p>}
          {title && <h2 className="content-block__title">{title}</h2>}
          {description && (
            <p className="content-block__description">
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <a href={buttonLink} className="button">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SplitView;
