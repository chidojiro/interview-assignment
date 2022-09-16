import React from "react";
import t from "prop-types";

const LanguageSwitcher = (props) => {
  const items = props.items;

  if (!items || (items && items.length < 2)) {
    return null;
  }

  /**
   * The callback for the language switcher element.
   * Redirect the user to the translated page.
   * The function will only work if the component is part of the application.
   *
   * @param {Object} event
   *   Change JavaScript event object.
   */
  const switchLang = (event) => {
    if (typeof window !== "undefined") {
      window.location.href = event.target.options[event.target.selectedIndex].dataset.url;
    }
  };

  return (
    <li className={"navigation__service-item"}>
      <a
        className="language__dropdown navigation__service-link"
        onClick={(e) => {
          e.preventDefault();
        }}>
        <span className="icon icon--language">
          <svg>
            <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#globe"></use>
          </svg>
        </span>
        <select className="js-language-switcher" onChange={switchLang}>
          {items.map((lang) => {
            return (
              <option
                key={lang.language}
                value={lang.language}
                defaultValue={lang.isActive}
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
    </li>
  );
};

LanguageSwitcher.propTypes = {
  items: t.array,
};

export default LanguageSwitcher;
