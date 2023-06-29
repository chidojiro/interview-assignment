import React from 'react';

interface LanguageSwitcherProps {
  activeLanguage: string;
  languages: string[];
}

function LanguageSwitcher({
  activeLanguage,
  languages,
}: LanguageSwitcherProps) {
  return (
    <ul className="top-link language-switcher l:ml-s">
      {
        languages.map((item: string) => {
          if (item === activeLanguage) {
            return <li className="top-link__item" key={item}>{item}</li>;
          }

          return (
            <li className="top-link__item" key={item}>
              <a
                href={`/${item}/`}
                className="language-link"
                hrefLang={item}
              >
                {item}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export default LanguageSwitcher;
