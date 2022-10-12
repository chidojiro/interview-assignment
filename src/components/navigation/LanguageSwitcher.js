import React from "react";
import t from "prop-types";

const LanguageSwitcher = ({ items, extraClasses }) => {
  if (!items || (items && items.length < 2)) {
    return null;
  }

  return (
    <ul className={`top-link language-switcher ${extraClasses ? extraClasses : ""}`}>
      {items.map((lang) => (
        <li key={lang.language} className="top-link__item">
          {!lang.isActive ? (
            <a href={lang.url} hrefLang={lang.language} className="language-link">
              {lang.language}
            </a>
          ) : (
            lang.language
          )}
        </li>
      ))}
    </ul>
  );
};

LanguageSwitcher.propTypes = {
  items: t.array,
  extraClasses: t.string,
};

export default LanguageSwitcher;
