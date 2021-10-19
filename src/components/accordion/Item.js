import React from "react";
import t from "prop-types";
import useLibrary from "../../hooks/useLibrary";

const AccordionItem = ({ children, title, subtitle, expanded = false, libs, ...attr }) => {
  const [ref] = useLibrary(libs);

  return (
    <li {...attr} className="link-list__item">
      <div
        className={`collapsible__trigger ${expanded ? "icon__toggler--active" : ""}`}
        data-rs-collapsible=""
        role="button"
        aria-expanded={expanded}
        data-rs-toggable=""
        ref={ref}
        data-scl=""
      >
        <h3 className="link-list__link">
          {title}
          {subtitle && <p className="text--alternative pt-xs mb-none">{subtitle}</p>}
          <span className="hidden--from-l toggle-arrow icon">
            <svg>
              <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down"></use>
            </svg>
          </span>
          <span className="hidden--until-l toggle-arrow icon icon--l">
            <svg>
              <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down-30"></use>
            </svg>
          </span>
        </h3>
      </div>
      <div
        className="collapsible__content body-copy"
        data-rs-collapsible-content={`${expanded ? "expanded" : ""}`}
        aria-hidden={!expanded}
      >
        <div className="collapsible__content--wrapper">{children}</div>
      </div>
    </li>
  );
};

AccordionItem.propTypes = {
  children: t.any,
  title: t.string,
  subtitle: t.string,
  expanded: t.bool,
  libs: t.object,
};

AccordionItem.defaultProps = {
  expanded: false,
};

export default AccordionItem;
