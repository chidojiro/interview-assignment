import React, { useState } from 'react';
import { Toast } from '../notifications/Toast';
// import { Toast } from '@ffw/randstad-shared-components';

interface Items {
  language: string,
  isActive?: boolean,
  url?: string
}

export interface LanguageSwitcherProps {
  items: Items[],
  extraClasses?: string,
  useToast?: boolean;
  toastSettings?: {
    id: string;
    title: Record<string, string>;
    buttonSuccessText: Record<string, string>;
    buttonCloseText: Record<string, string>;
  }
}

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
