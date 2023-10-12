import React, {useEffect} from 'react';

import useAutosuggest from '../../../hooks/useAutosuggest';
import withField from '../../../hoc/withField';
import ListItemMark from './ListItemMark';
import FormGroup from '../FormGroup';
import Svg from '../../common/Svg';
import type { AutosuggestPropTypes } from './Autosuggest.types';

/**
 * An input field which predicts the rest of a word a user is typing. See [here](https://randstad.design/components/core/forms/autosuggest/)
 *
 * ---
 * *All props will be part `<input>` attributes. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support its props.**
 */
function Autosuggest({
  customInput = false,
  customInputLabel = 'Add:',
  customInputIcon = 'add',
  items = [],
  onInputChange,
  onSelectItem,
  onDropdownClose,
  noResultsText,
  initialValue,
  config,
  disabled,
  _formGroupProps,
  ...fieldProps
}: AutosuggestPropTypes) {
  const [values, props] = useAutosuggest({
    items, onInputChange, onSelectItem, config, initialValue, onDropdownClose,
  });

  const {
    open, inputValue, list, isNoResults,
  } = values;

  const {
    inputProps,
    wrapperProps,
    listItemProps,
  } = props;

  return (
    <FormGroup {..._formGroupProps}>
      <div {...wrapperProps}>
        <input {...fieldProps} {...inputProps} disabled={disabled} type="text" autoComplete="off" onKeyDown={(e) => open && e.key === 'Enter' && e.preventDefault()} />
        {open && (
          <ul className="select-menu__list">
            {customInput && listItemProps && (
              <li {...listItemProps(inputValue, 0, true)}>
                <Svg icon={customInputIcon} />
                {customInputLabel}
                {' '}
                {inputValue}
              </li>
            )}
            {list && listItemProps && list.map((listItem, i) => (
              listItem !== undefined && (
                // No unique id that we can use for the key installed of index.
                //  eslint-disable-next-line react/no-array-index-key
                <li key={`list-item-${i}`} {...listItemProps(listItem, customInput ? i + 1 : i)}>
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
