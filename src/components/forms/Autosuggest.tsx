import React from 'react';

import useAutosuggest, { UseAutosuggestParamTypes } from '../../hooks/useAutosuggest';
import withField, { WithFieldProps } from '../../hoc/withField';
import ListItemMark from './autosuggest/ListItemMark';
import FormGroup from '../form-group/FormGroup';

interface AutosuggestPropTypes extends WithFieldProps, UseAutosuggestParamTypes {
  noResultsText?: string,
  _formGroupProps?: object,
}

/**
 * An input field which predicts the rest of a word a user is typing. See [here](https://randstad.design/components/core/forms/autosuggest/)
 *
 * ---
 * *All props will be part `<input>` attributes. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support its props.**
 */
function Autosuggest({
  items = [],
  onInputChange,
  onSelectItem,
  noResultsText,
  initialValue,
  config,
  _formGroupProps,
  ...fieldProps
}: AutosuggestPropTypes) {
  const [values, props] = useAutosuggest({
    items, onInputChange, onSelectItem, config, initialValue,
  });

  const {
    open, inputValue, list, isNoResults,
  } = values;

  const { inputProps, wrapperProps, listItemProps } = props;
  return (
    <FormGroup {..._formGroupProps}>
      <div {...wrapperProps}>
        <input {...fieldProps} {...inputProps} type="text" autoComplete="off" />
        {open && (
          <ul className="select-menu__list">
            {list && listItemProps && list.map((listItem, i) => (
              listItem !== undefined && (
                // No unique id that we can use for the key installed of index.
                //  eslint-disable-next-line react/no-array-index-key
                <li key={`list-item-${i}`} {...listItemProps(listItem, i)}>
                  <ListItemMark inputValue={inputValue}>{listItem}</ListItemMark>
                </li>
              )
            ))}
            {isNoResults && (
              <li className="select-menu__item select-menu__item--no-result">
                {noResultsText || 'no results, please try another search'}
              </li>
            )}
          </ul>
        )}
      </div>
    </FormGroup>
  );
}

export default withField(Autosuggest);
