import React from 'react';
import { BgColor, getBackground } from '../../utils/getBackground';

interface Header extends BgColor {
  /** @deprecated use `bgColor` instead. */
  variation?: BgColor['bgColor'],
  titleTop: string | React.ReactNode,
  titleBottom?: string | React.ReactNode,
  /** Used for header description. */
  children?: React.ReactNode,
  cta?: {
    title: string,
    href: string,
  },
  classes?: string[],
}

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
    <header className={headerClasses.join(' ')}>
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
              <div className="content-block__split-text content-block__split-text--s">
                {text && <p>{text}</p>}
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
    </header>
  );
}

export default HeaderText;
