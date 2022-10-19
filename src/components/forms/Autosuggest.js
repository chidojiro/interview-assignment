import React from "react";
import t from "prop-types";

import ListItemMark from "./autosuggest/ListItemMark";

import useAutosuggest from "@hooks/useAutosuggest";
import withFieldGroup from "@hoc/withFormGroup";

const Autosuggest = ({
  items = [],
  onChange,
  onSelectItem,
  noResultsText,
  config,
  ...fieldProps
}) => {
  const [values, props] = useAutosuggest({ items, onChange, onSelectItem, config });

  const { open, inputValue, list, isNoResults } = values;
  // eslint-disable-next-line react/prop-types
  const { inputProps, wrapperProps, listItemProps } = props;

  return (
    <div {...wrapperProps}>
      <input {...fieldProps} {...inputProps} type="text" autoComplete="off" />
      {open && (
        <ul className="select-menu__list">
          {list.map((listItem, i) => {
            return (
              <li key={`list-item-${i}`} {...listItemProps(listItem, i)}>
                <ListItemMark inputValue={inputValue}>{listItem}</ListItemMark>
              </li>
            );
          })}
          {isNoResults && (
            <li className="select-menu__item select-menu__item--no-result">
              {noResultsText ? noResultsText : "no results, please try another search"}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

Autosuggest.propTypes = {
  // Comming from withFieldGroup HOC
  /** Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label" */
  label: t.string,
  name: t.string,
  /** If not provided, will be generated from `name` */
  id: t.string,
  error: t.string,
  description: t.string,
  required: t.oneOfType([t.bool, t.string]),
  readOnly: t.bool,
  capitalize: t.bool,
  children: t.any,
  optionalLabel: t.string,
  formGroupClass: t.string,
  items: t.array,
  /** Triggered on input change */
  onChange: t.func,
  /** Triggered on item select */
  onSelectItem: t.func,
  noResultsText: t.string,
  config: t.shape({
    /** Skip autosuggest filter. Work exactly as use-exact-values. Usually this is used when working with elastic search filter which is more complex. */
    skipFilter: t.bool,
    /** Allow numeric values in the input. When enter only numbers it will return the match numbers from item. */
    allowNumericValue: t.bool,
  }),
};

export default withFieldGroup(Autosuggest);
