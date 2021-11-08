import React from "react";
import t from "prop-types";
import useLibrary from "@hooks/useLibrary";

/**
 * Enables to filter and sort content on the page. See [here](https://randstad.design/components/core/filters/blog/)
 *
 */
const Sortbar = ({ count, selectLabel, selectAttributes, selectOptions, untouched, libs }) => {
  const [ref] = useLibrary(libs);
  const { id, ...attr } = selectAttributes || {};

  return (
    <div className="wrapper">
      <div
        className="sortbar l:divider"
        data-rs-toggable-group="toggable-group__item--active"
        data-scl="">
        <span className="sortbar__count text-ellipsis">{count}</span>
        <div className="form-group">
          <label className="form-group__label hidden--visually" htmlFor={id}>
            {selectLabel}
          </label>
          <div className="form-group__input">
            <select
              id={id}
              required="required"
              data-rs-untouched=""
              {...attr}
              className={untouched ? "untouched" : ""}
              data-scl=""
              ref={ref}>
              {selectOptions &&
                Object.keys(selectOptions).map((item) => (
                  <option key={item} value={item}>
                    {selectOptions[item]}
                  </option>
                ))}
            </select>
            <span className="select-arrow icon">
              <svg>
                <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Sortbar.propTypes = {
  count: t.string,
  selectLabel: t.string,
  selectAttributes: t.object,
  selectOptions: t.object,
  untouched: t.bool,
  libs: t.object,
};

export default Sortbar;
