import React from 'react';

interface Items {
  language: string,
  isActive?: boolean,
  url?: string
}

export interface LanguageSwitcherProps {
  items: Items[],
  extraClasses?: string,
}

function LanguageSwitcher({ items, extraClasses }: LanguageSwitcherProps) {
  if (!items || (items && items.length < 2)) {
    return null;
  }

  return (
    <ul className={`top-link language-switcher ${extraClasses || ''}`}>
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
}

export default LanguageSwitcher;
