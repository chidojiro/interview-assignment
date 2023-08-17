import React, { useState } from 'react';
import Toast from '../../notifications/Toast';
import { LanguageSwitcherProps } from './LanguageSwitcher.types';
import { gtmDataLayerPushHandler } from '../../../utils/gtm';

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

  const dataLayerLanguageSwitch = (query: object, currentLanguage: string, newLanguage: string) => {
    let hasFilters = false;
    if (query && Object.keys(query).length !== 0){
      hasFilters = true;
    }
    const event = {
      event: 'interaction',
      event_params: {
        event_name: 'language_switch',
        current_language: currentLanguage,
        switched_language: newLanguage,
        filters_active: hasFilters ? 'true' : 'false',
      },
    };
    gtmDataLayerPushHandler(event);
  }

  const onSuccessHandler = () => {
    window.location.href = selectedLanguage.href;
    items.filter(item => {
      console.log("ITEM", item)
      dataLayerLanguageSwitch(item.filters as object, item.language as string, selectedLanguage.lang as string);
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
