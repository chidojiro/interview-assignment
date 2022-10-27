import React from "react";
import t from "prop-types";

import useAutosuggest from "@hooks/useAutosuggest";
import withField from "@hoc/withField";

import ListItemMark from "./autosuggest/ListItemMark";

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
  name: t.string.isRequired,
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
    /** Strip all words listed in the array from selected item value. */
    itemsStripWordList: t.array,
  }),
  /** Wrap component with FormGroup functionality. See FormGroup for more information on props support */
  withFormGroup: t.bool,
};

export default withField(Autosuggest);
