import React, { useState } from 'react';
import Toast from '../../notifications/Toast';
import { LanguageSwitcherProps } from './LanguageSwitcher.types';
import { languageSwitchEvent } from '../../../utils/gtmEvents';

function LanguageSwitcher({
  items, extraClasses, useToast = false, toastSettings,
}: LanguageSwitcherProps) {
  const [toastOpen, setToastOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ href: '', lang: '' });

  const onClickHandler = (e: any) => {
    if (useToast) {
      e.preventDefault();
      setToastOpen((prev) => !prev);

      const selectedElement = e.target;
      const hrefValue = selectedElement?.getAttribute('href') || '';
      const hrefLangValue = selectedElement?.getAttribute('hrefLang') || '';
      setSelectedLanguage({ href: hrefValue, lang: hrefLangValue });
    }
  };

  const onSuccessHandler = () => {
    window.location.href = selectedLanguage.href;
    let hasFilters = false;
    items.filter(item => {
      if (item.isActive) {
        if (item.filters && Object.keys(item.filters).length !== 0){
          hasFilters = true;
        }
        languageSwitchEvent(item.language as string, selectedLanguage.lang as string, hasFilters as boolean);
      }
    })
  };

  if (!items || (items && items.length < 2)) {
    return null;
  }

  return (
    <>
      <ul className={`top-link language-switcher ${extraClasses || ''}`}>
        {items.map((lang) => (
          <li key={lang.language} className="top-link__item">
            {!lang.isActive ? (
              <a href={lang.url} hrefLang={lang.language} className="language-link" onClick={onClickHandler}>
                {lang.language}
              </a>
            ) : (
              lang.language
            )}
          </li>
        ))}
      </ul>
      {(useToast && (toastOpen && toastSettings)) && (
        <Toast
          id={toastSettings?.id}
          title={toastSettings?.title[selectedLanguage.lang]}
          onSuccess={onSuccessHandler}
          buttonSuccessText={toastSettings?.buttonSuccessText[selectedLanguage.lang]}
          buttonCloseText={toastSettings?.buttonCloseText[selectedLanguage.lang]}
          successBtnVariant="filled"
        />
      )}
    </>
  );
}

export default LanguageSwitcher;
