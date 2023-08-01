import { useEffect, useMemo, useRef, useState } from 'react';

import handleScrollBar from '../../utils/handleScrollBar';
import useDebounce from '../useDebounce';
import { UseAutosuggestParamTypes } from './useAutosuggest.types';

const keys = {
  Up: 'ArrowUp',
  Down: 'ArrowDown',
  PageUp: 'PageUp',
  PageDown: 'PageDown',
  Enter: 'Enter',
  Tab: 'Tab',
  Escape: 'Escape',
};

const classes = {
  list: {
    active: 'select-menu--open',
  },
  item: {
    base: 'select-menu__item',
    action: 'select-menu__item--action',
    active: 'select-menu__item--preselect',
  },
};

const getValue = (inputValue: string, value: string, itemsStripWordList: string[] = [], allowNumericValue = false) => {
  let realValue = value;
  // Remove words listed in the array from the selected item value.
  if (itemsStripWordList) {
    itemsStripWordList.forEach((word) => {
      if (realValue.includes(word)) {
        realValue = realValue.replace(word, '');
      }
    });
  }

  // Return numbers from item when configuration allowNumericValue is pass and the input is numbers.
  if (allowNumericValue && Number.parseInt(inputValue, 10)) {
    // Select all numbers form the value.
    const match = value.match(/[0-9]+/);

    // Get last numbers from the match. Some values have numbers in their name. For example Test 1 (1000) should return 1000.
    realValue = match ? match[match.length - 1] : '';
  }

  return realValue;
};

// It's not possible, unless to create bunch of utils/hook handlers which will complicate logic even more.
/* eslint-disable sonarjs/cognitive-complexity */
const useAutosuggest = ({
  items = [],
  onInputChange: changeCb,
  onSelectItem: selectItemCb,
  initialValue = '',
  config = {},
}: UseAutosuggestParamTypes) => {
  const { skipFilter, allowNumericValue, itemsStripWordList = [], isMultiSelect = false } = config;
  const onSelectItem = selectItemCb || (() => null);
  // States.
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue);
  // Keep track on input value to avoid unneeded requests.
  const [previousInputValue, setPreviousInputValue] = useState(initialValue);
  // Index used to manage preselect item.
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Used to track scroll position.
  const [lastPressKey, setLastPressKey] = useState('');

  // Reference variables.
  const wrapperRef = useRef(null);
  const activeListItemRef = useRef(null);

  /**
   * The default timeout is 150 which restricts the number of requests for a given time while the user is typing.
   * This delay delays the setting of the state value which comes from the user input.
   * If the requests fail for sending high amount of requests - increase the delay.
   */
  const debounceInputValue = useDebounce(inputValue, 150);
  const filterList = useMemo(() => items.filter((l) => l.toLowerCase().indexOf(inputValue.trim().toLowerCase()) > -1), [items, inputValue]);

  const filteredList = skipFilter ? items : filterList;
  // Update the state of the input value whenever it's changed.
  useEffect(() => setInputValue(initialValue), [initialValue]);

  useEffect(() => {
    if (previousInputValue === debounceInputValue) return;

    setSelectedIndex(0);
    setPreviousInputValue(debounceInputValue);
    const onChange = changeCb || (() => null);
    onChange(debounceInputValue);
  }, [debounceInputValue, changeCb, previousInputValue]);

  useEffect(() => {
    if (!activeListItemRef?.current || !wrapperRef?.current || !lastPressKey) return;
    const listWrapper = (wrapperRef.current as HTMLLIElement).querySelector('ul');
    if (listWrapper === null) return;

    handleScrollBar(activeListItemRef.current, listWrapper, lastPressKey);
  }, [lastPressKey, selectedIndex]);

  // Handle outside click.
  useEffect(() => {
    if (wrapperRef.current === null) return;

    const clickOutside = ({ target }: MouseEvent) => {
      if (wrapperRef.current === null) return;
      const w = wrapperRef.current as HTMLLIElement;

      if (
        w.className.includes('open') &&
        !w.querySelector('ul')?.contains(target as HTMLElement) &&
        !w.querySelector('input')?.contains(target as HTMLElement)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('click', clickOutside);
    // Use effect expects cleanup function as a return.
    // eslint-disable-next-line consistent-return
    return () => document.removeEventListener('click', clickOutside);
  }, []);

  // Event handlers.
  const handleInputChange = ({ target }: React.ChangeEvent) => {
    const { value } = target as HTMLInputElement;
    if (previousInputValue === value) return;

    // Close the list if value is empty.
    setOpen(!!value);

    setInputValue(value);
  };

  const handleSelectedItem = (listItemValue: string) => {
    setOpen(false);
    const value = getValue(inputValue, listItemValue, itemsStripWordList, allowNumericValue);

    if (previousInputValue === value && !isMultiSelect) return;

    setInputValue(isMultiSelect ? '' : value);
    onSelectItem(value);
  };

  const handleKeyDown = ({ code }: React.KeyboardEvent) => {
    if (wrapperRef.current === null) return;
    // Allow listed keys.
    if (!Object.values(keys).includes(code)) return;

    const listWrapper = (wrapperRef.current as HTMLElement).querySelector('ul');
    const itemsLength = listWrapper?.children.length || 0;

    // Keep track on press keys. Used in scroll functionality.
    setLastPressKey(code);

    switch (code) {
      case keys.Down:
        // Move item down with one position.
        if (selectedIndex < itemsLength - 1) {
          setSelectedIndex((state) => state + 1);
        }
        break;

      case keys.Up:
        // Move item up with one position.
        if (selectedIndex) {
          setSelectedIndex((state) => state - 1);
        }
        break;

      case keys.PageDown:
        // Move to last item.
        if (selectedIndex < itemsLength - 1) {
          setSelectedIndex(itemsLength - 1);
        }
        break;

      case keys.PageUp:
        // Move to first item.
        if (selectedIndex > 0) {
          setSelectedIndex(0);
        }
        break;

      case keys.Enter:
      case keys.Tab:
        // Select preselect item or close if there is no results.
        if (activeListItemRef.current !== null) {
          (activeListItemRef.current as HTMLLIElement).click();
        } else {
          setOpen(false);
        }
        break;

      case keys.Escape:
        setOpen(false);
        break;

      default:
        break;
    }
  };

  // Field properties.
  const inputProps = {
    value: inputValue,
    onChange: handleInputChange,
    onFocus: handleInputChange,
  };

  // This should be pass to the element who wraps input and ul.
  const wrapperProps = {
    onKeyDown: handleKeyDown,
    ref: wrapperRef,
    className: `${open ? classes.list.active : ''}`,
  };

  // This should be pass to the items in the list
  const listItemProps = (listItem: string, index: number, customValue?: boolean) => {
    const active = selectedIndex === index;
    // Active item should get ref.
    const ref = active ? { ref: activeListItemRef } : {};

    return {
      onMouseEnter: () => setSelectedIndex(index),
      onClick: () => handleSelectedItem(listItem),
      className: `${classes.item.base} ${active ? classes.item.active : ''} ${customValue ? classes.item.action : ''}`,
      ...ref,
    };
  };

  return [
    {
      open,
      inputValue,
      selectedIndex,
      list: filteredList,
      isNoResults: inputValue && filteredList.length === 0,
    },
    {
      inputProps,
      wrapperProps,
      listItemProps,
    },
  ];
};

export default useAutosuggest;
