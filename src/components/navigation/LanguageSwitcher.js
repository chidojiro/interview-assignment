import React from "react";
import t from "prop-types";

const LanguageSwitcher = ({ items }) => {
  if (!items || (items && items.length < 2)) {
    return null;
  }

  return (
    <ul className="top-link language-switcher">
      {items.map((lang) => {
        return (
          <li key={lang.language} className="top-link__item">
            {!lang.isActive ? (
              <a href={lang.url} hrefLang={lang.language} className="language-link">
                {lang.language}
              </a>
            ) : (
              lang.language
            )}
          </li>
        );
      })}
    </ul>
  );
};

LanguageSwitcher.propTypes = {
  items: t.array,
};

export default LanguageSwitcher;
