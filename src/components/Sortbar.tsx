import React from "react";
import useLibrary, { Library } from "@hooks/useLibrary";
import Svg from "@components/base/Svg";

interface Sortbar extends Library {
  count: string,
  selectLabel: string,
  /** `attrubutes` are spread in the component. You can pass from `data-attributes` to events */
  selectAttributes?: React.ComponentPropsWithoutRef<"select">,
  selectOptions?: { [key: string]: string },
  untouched?: boolean,
}

/**
 * Enables to filter and sort content on the page. See [here](https://randstad.design/components/core/filters/blog/)
 *
 */
const Sortbar = ({ count, selectLabel, selectAttributes, selectOptions, untouched, libs }: Sortbar) => {
  const [ref] = useLibrary<HTMLSelectElement>(libs);
  const { id, ...attr } = selectAttributes || {};

  if (!id) {
    console.warn("Sortbar: selectAttributes should contain an id");
  }

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
              required
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
              <Svg icon="chevron-down" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sortbar;
