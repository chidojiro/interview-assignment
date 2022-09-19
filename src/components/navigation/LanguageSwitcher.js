import React from "react";
import t from "prop-types";

const LanguageSwitcher = ({ items }) => {
  if (!items || (items && items.length < 2)) {
    return null;
  }

  return (
    <a className="language__dropdown navigation__service-link">
      <span className="icon icon--language">
        <svg>
          <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#globe"></use>
        </svg>
      </span>
      <select className="js-language-switcher">
        {items.map((lang) => {
          return (
            <option
              key={lang.language}
              value={lang.language}
              selected={lang.isActive}
              data-url={lang.url}>
              {lang.language}
            </option>
          );
        })}
      </select>
      <span className="icon select--status">
        <svg>
          <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down-8"></use>
        </svg>
      </span>
    </a>
  );
};

LanguageSwitcher.propTypes = {
  items: t.array,
};

export default LanguageSwitcher;
