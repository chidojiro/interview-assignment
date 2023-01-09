import React from "react";
import useLibrary, { Library } from "@hooks/useLibrary";

interface AccordionItem extends Library {
  children: React.ReactNode,
  title: string,
  subtitle?: string,
  expanded?: boolean,
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  HeadingTag?: keyof JSX.IntrinsicElements,
  ariaLabel: string,
}

/**
 * Expanding and collapsing sections of content. See [here](https://randstad.design/components/core/accordion/)
 *
 */
const AccordionItem = ({
  children,
  title,
  subtitle,
  expanded = false,
  libs,
  HeadingTag = "h3",
  ariaLabel = "",
  ...attr
}: AccordionItem) => {
  const [ref] = useLibrary<HTMLDivElement>(libs);

  return (
    <li {...attr} className="link-list__item">
      <div
        className={`collapsible__trigger ${expanded ? "icon__toggler--active" : ""}`}
        data-rs-collapsible=""
        role="button"
        aria-expanded={expanded}
        aria-label={ariaLabel}
        data-rs-toggable=""
        ref={ref}
        data-scl="">
        <HeadingTag className="link-list__link">
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
        </HeadingTag>
      </div>
      <div
        className="collapsible__content body-copy"
        data-rs-collapsible-content={`${expanded ? "expanded" : ""}`}
        aria-hidden={!expanded}>
        <div className="collapsible__content--wrapper">{children}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
