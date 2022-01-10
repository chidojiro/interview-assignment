import React from "react";

const LanguageSwitcher = ({ items }) => {
  if (items.length < 2) {
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

export default LanguageSwitcher;
