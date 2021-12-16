import React from "react";
import t from "prop-types";
import { getBackground } from "../../utils/getBackground";

/**
 * A header which only consists out of text. See [here](https://randstad.design/components/examples/headers/text/)
 *
 */
/* eslint-disable react/prop-types */
const HeaderText = ({
  variation,
  bgColor: bgColorProp,
  titleTop,
  titleBottom,
  children: text,
  cta,
  classes = [],
}) => {
  const headerClasses = ["header", "header--text", ...classes];
  let bgColorTemp = bgColorProp;

  // Depending on the variation.
  if (variation) {
    bgColorTemp = variation;
    console.warn("Header text: variation prop is deprecated, use bgColor instead");
  }

  const bgColor = getBackground(bgColorTemp ? bgColorTemp : "dark-blue");

  if (bgColor) headerClasses.push(bgColor);

  return (
    <header className={headerClasses.join(" ")}>
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
};

HeaderText.propTypes = {
  /** See more <a href="https://randstad.design/styleguide/colors/">here</a>*/
  bgColor: t.oneOf(["primary", "secondary", "tertiary", "quaternary", "quinary", "senary"]),
  titleTop: t.string,
  titleBottom: t.string,
  cta: t.shape({
    href: t.string,
    title: t.string,
  }),
  classes: t.array,
  children: t.any,
};

HeaderText.defaultProps = {
  classes: [],
};

export default HeaderText;
