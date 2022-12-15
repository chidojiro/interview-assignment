import { useEffect, useMemo, useRef, useState } from "react";

import handleScrollBar from "@utils/handleScrollBar";
import isRefsEmpty from "@utils/isRefsEmpty";
import useDebounce from "@hooks/useDebounce";

const keys = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  PageUp: "PageUp",
  PageDown: "PageDown",
  Enter: "Enter",
  Tab: "Tab",
  Escape: "Escape",
};

const classes = {
  list: {
    active: "select-menu--open",
  },
  item: {
    base: "select-menu__item",
    active: "select-menu__item--preselect",
  },
};

const useAutosuggest = ({
  items,
  onChange: changeCb,
  onSelectItem: selectItemCb,
  initialValue = "",
  config = {},
}) => {
  const { skipFilter, allowNumericValue, itemsStripWordList = [] } = config;
  const onChange = changeCb ? changeCb : () => null;
  const onSelectItem = selectItemCb ? selectItemCb : () => null;

  // States.
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue);
  // Keep track on input value to avoid unneeded requests.
  const [previousInputValue, setPreviousInputValue] = useState(initialValue);
  // Index used to manage preselect item.
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Reference variables.
  const wrapperRef = useRef(null);
  const activeListItemRef = useRef(null);
  // Used to track which key is pressed to determined scroll position.
  const lastPressKey = useRef(null);

  const debounceInputValue = useDebounce(inputValue);

  const filteredList = skipFilter
    ? items
    : useMemo(
        () =>
          items.filter((l) => {
            return l.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
          }),
        [items, inputValue],
      );
  // Update the state of the input value whenever it's changed.
  useEffect(() => setInputValue(initialValue), [initialValue]);

  useEffect(() => {
    if (previousInputValue === debounceInputValue) return;

    setSelectedIndex(0);
    setPreviousInputValue(debounceInputValue);
    onChange(debounceInputValue);
  }, [debounceInputValue]);

  useEffect(() => {
    if (isRefsEmpty(activeListItemRef, wrapperRef, lastPressKey)) return;

    handleScrollBar(
      activeListItemRef.current,
      wrapperRef.current.querySelector("ul"),
      lastPressKey.current,
    );
  }, [selectedIndex]);

  // Handle outside click.
  useEffect(() => {
    if (isRefsEmpty(wrapperRef)) return;

    const clickOutside = ({ target }) => {
      const w = wrapperRef.current;

      if (
        w.className.includes("open") &&
        !w.querySelector("ul").contains(target) &&
        !w.querySelector("input").contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  // Utility functions depending on state.
  const getValue = (value) => {
    let realValue = value;
    // Remove words listed in the array from the selected item value.
    if (itemsStripWordList) {
      itemsStripWordList.forEach((word) => {
        if (realValue.includes(word)) {
          realValue = realValue.replace(word, "");
        }
      });
    }

    // Return numbers from item when configuration allowNumericValue is pass and the input is numbers.
    if (allowNumericValue && Number.parseInt(inputValue)) {
      // Select all numbers form the value.
      const regex = new RegExp(/[0-9]+/, "g");
      const match = value.match(regex);
      // Get last numbers from the match. Some values have numbers in there name. For example Test 1 (1000) should return 1000.
      realValue = match[match.length - 1];
    }

    return realValue;
  };

  // Event handlers.
  const handleInputChange = ({ target }) => {
    const value = target.value;
    // Close the list if value is empty.
    setOpen(!!value);

    if (previousInputValue === value) return;

    setInputValue(value);
  };

  const handleSelectedItem = (listItemValue) => {
    setOpen(false);
    const value = getValue(listItemValue);

    if (previousInputValue === value) return;

    setInputValue(value);
    onSelectItem(value);
  };

  const handleKeyDown = ({ code }) => {
    if (isRefsEmpty(wrapperRef)) return;
    // Allow only listed keys.
    if (!Object.values(keys).includes(code)) return;

    const itemsLength = wrapperRef.current.querySelector("ul").children.length;

    // Keep track on press keys. Used in scroll functionality.
    lastPressKey.current = code;

    switch (code) {
      case keys.Down:
        // Move item down with one position.
        selectedIndex < itemsLength - 1 && setSelectedIndex((state) => state + 1);
        break;

      case keys.Up:
        // Move item up with one position.
        selectedIndex > 0 && setSelectedIndex((state) => state - 1);
        break;

      case keys.PageDown:
        // Move to last item.
        selectedIndex < itemsLength - 1 && setSelectedIndex(itemsLength - 1);
        break;

      case keys.PageUp:
        // Move to first item.
        selectedIndex > 0 && setSelectedIndex(0);
        break;

      case keys.Enter:
      case keys.Tab:
        // Select preselect item or close the there is no results.
        !isRefsEmpty(activeListItemRef) ? activeListItemRef.current.click() : setOpen(false);
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
    className: `${open ? classes.list.active : ""}`,
  };

  // This should be pass to the items in the list
  const listItemProps = (listItem, index) => {
    const active = selectedIndex == index;
    // Only active item should get ref.
    const ref = active ? { ref: activeListItemRef } : {};

    return {
      onMouseEnter: () => setSelectedIndex(index),
      onClick: () => handleSelectedItem(listItem),
      className: `${classes.item.base} ${active ? classes.item.active : ""}`,
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
