import React, { useEffect, useRef } from "react";
import t from "prop-types";

const Filter = ({ title, children, footer, clearLink, closeMobileOnSubmit = true, lib }) => {
  const filterRef = useRef();
  const closeButtonRef = useRef();
  let transformedFooter = "";

  useEffect(() => {
    if (!lib) return;

    new lib.Filter(filterRef.current);
  }, [lib]);

  const clickElement = (ref) => {
    ref.current.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      }),
    );
  };

  if (footer) {
    transformedFooter = { ...footer };

    // Prevents breaking if there is more than one child.
    if (typeof transformedFooter.props.children !== "object" && closeMobileOnSubmit) {
      const clickFunc = (inheritClickEvent) => () => {
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
    <div className="filter" data-rs-filter="" ref={filterRef}>
      <div className="filter__toggle" data-rs-filter-refine-search="">
        <span className="icon icon--inline hidden--from-l">
          <svg>
            <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#filter"></use>
          </svg>
        </span>
        <span>{title}</span>
      </div>
      <div className="filter__content" data-rs-filter-content="">
        <div className="filter__header hidden--from-l">
          <span className="filter__title">filter</span>
          <span className="icon icon--inline">
            <svg data-rs-filter-close="" ref={closeButtonRef}>
              <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#close"></use>
            </svg>
          </span>
        </div>
        <div className="filter__block">
          {clearLink && <div className="filter__clear">{clearLink}</div>}
          {children}
        </div>
        {transformedFooter && (
          <div className="filter__footer divider--top hidden--from-l">{transformedFooter}</div>
        )}
      </div>
    </div>
  );
};

Filter.propTypes = {
  title: t.string,
  children: t.any,
  footer: t.any,
  clearLink: t.any,
  closeMobileOnSubmit: t.bool,
  lib: t.object,
};

export default Filter;
