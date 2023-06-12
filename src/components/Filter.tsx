import React, { useRef } from "react";
import useLibrary, { Library } from "../hooks/useLibrary";

interface Filter extends Library {
  title: string,
  mobileTitle: string,
  children: any,
  footer: React.ReactElement,
  clearLink: React.ReactNode,
  closeMobileOnSubmit: boolean,
}

/**
 * A bundle of different form elements and manipulating the page of search results. See [here](https://randstad.design/components/core/filters/blog/)
 *
 */
const Filter = ({
  title,
  mobileTitle,
  children,
  footer,
  clearLink,
  closeMobileOnSubmit = true,
  libs,
}: Filter) => {
  const [ref] = useLibrary<HTMLDivElement>(libs);
  const closeButtonRef = useRef<SVGSVGElement>(null);

  let transformedFooter;

  const clickElement = (ref: typeof closeButtonRef) => {
    ref.current && ref.current.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      }),
    );
  };

  if (footer) {
    transformedFooter = { ...footer } as React.ReactElement;

    // Prevents breaking if there is more than one child.
    if (typeof transformedFooter.props.children !== "object" && closeMobileOnSubmit) {
      const clickFunc = (inheritClickEvent: () => void) => () => {
        // Fire inherit click event
        if (inheritClickEvent) {
          inheritClickEvent();
        }
        clickElement(closeButtonRef);
      };

      transformedFooter.props = {
        ...transformedFooter.props,
        onClick: clickFunc(transformedFooter.props.onClick),
      };
    }
  }

  return (
    <div className="filter" data-rs-filter="" ref={ref}>
      <div className="filter__toggle" data-rs-filter-refine-search="" role="button" aria-label="">
        <span className="icon icon--inline hidden--from-l text-brand-primary">
          <svg>
            <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#filter`}></use>
          </svg>
        </span>
        <span>{title}</span>
      </div>
      <div className="filter__content" data-rs-filter-content="">
        <div className="filter__header hidden--from-l">
          <span className="filter__title">{mobileTitle}</span>
          <span className="icon icon--inline">
            <svg data-rs-filter-close="" ref={closeButtonRef}>
              <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#close`}></use>
            </svg>
          </span>
        </div>
        <div className="filter__block">
          {clearLink && <div className="filter__clear">{clearLink}</div>}
          {children}
        </div>
        {transformedFooter && (
          <div className="filter__footer divider divider--top hidden--from-l">
            {transformedFooter}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
