import React from "react";
import t from "prop-types";

import ListItemMark from "./autosuggest/ListItemMark";

import useAutosuggest from "@hooks/useAutosuggest";
import withFieldGroup from "@hoc/withFormGroup";

/**
 * An input field which predicts the rest of a word a user is currently typing. See [here](https://randstad.design/components/core/forms/autosuggest/)
 *
 * ***
 * *Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label"*
 */
const Autosuggest = ({
  items = [],
  onChange,
  onSelectItem,
  noResultsText,
  initialValue,
  config,
  ...fieldProps
}) => {
  const [values, props] = useAutosuggest({ items, onChange, onSelectItem, config, initialValue });

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
  label: t.string,
  name: t.string,
  /** If not provided, will be generated from `name` */
  id: t.string,
  error: t.string,
  description: t.string,
  required: t.oneOfType([t.bool, t.string]),
  readOnly: t.bool,
  capitalize: t.bool,
  optionalLabel: t.string,
  formGroupClass: t.string,
  items: t.array,
  /** Triggered on input change */
  onChange: t.func,
  /** Triggered on item select */
  onSelectItem: t.func,
  noResultsText: t.string,
  config: t.shape({
    /** Skip autosuggest filter. Work exactly as `use-exact-values`. Usually this is used when working with elastic search filter which is more complex. */
    skipFilter: t.bool,
    /** Allow numeric values in the input. When enter only numbers it will return the match numbers from item. */
    allowNumericValue: t.bool,
    /** Strip all words listed in the array from selected item initialValue. */
    itemsStripWordList: t.array,
  }),
  /** Set autosuggest initial initialValue. */
  initialValue: t.string,
};

export default withFieldGroup(Autosuggest);
