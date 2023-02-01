import React from 'react';

interface LanguageSwitcherProps {
  activeLanguage: string;
  secondLanguage: string;
}

function LanguageSwitcher({
  activeLanguage,
  secondLanguage,
}: LanguageSwitcherProps) {
  return (
    <ul className='top-link language-switcher l:ml-s'>
      <li className='top-link__item'>
        {activeLanguage === 'en'
          ? 'en'
          : (
            <a
              href='/'
              className='language-link'
              hrefLang='en'
            >
              en
            </a>
          )}
      </li>
      <li className='top-link__item'>
        {activeLanguage === secondLanguage
          ? secondLanguage
          : (
            <a
              href={`/${secondLanguage}/`}
              className='language-link'
              hrefLang={secondLanguage}
            >
              {secondLanguage}
            </a>
          )}
      </li>
    </ul>
  );
}

export default LanguageSwitcher;
