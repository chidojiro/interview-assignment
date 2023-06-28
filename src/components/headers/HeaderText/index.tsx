import React from 'react';
import getBackground from '../../../utils/getBackground';
import { Header } from './HeaderText.types';

/**
 * A header which only consists out of text. See [here](https://randstad.design/components/examples/headers/text/)
 */
function HeaderText({
  variation,
  bgColor: bgColorProp,
  titleTop,
  titleBottom,
  children: text,
  cta,
  classes = [],
}: Header) {
  const headerClasses = ['header', 'header--text', ...classes];
  let bgColorTemp = bgColorProp;

  // Depending on the variation.
  if (variation) {
    bgColorTemp = variation;
    console.warn('Header text: variation prop is deprecated, use bgColor instead');
  }

  const bgColor = getBackground(bgColorTemp || 'dark-blue');

  if (bgColor) headerClasses.push(bgColor);

  return (
    <div className={headerClasses.join(' ')}>
      <div className="header__wrapper wrapper">
        <div className="header__content header__content--full-width content-block">
          <h1 className="content-block__title">
            <span className="content-block__title-top">{titleTop}</span>
            {titleBottom && (
              <span className="content-block__title-bottom text--emphasis">{titleBottom}</span>
            )}
          </h1>
          {(text || cta) && (
            <div className="content-block__split">
              <div className="content-block__split-text body-copy">
                {text && text}
              </div>
              {cta?.title && (
                <a href={cta?.href} className="button">
                  {cta.title}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderText;
