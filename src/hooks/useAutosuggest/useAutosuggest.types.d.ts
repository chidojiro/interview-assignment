export type UseAutosuggestParamTypes = {
  items?: string[];
  /** Triggered on input change */
  onInputChange?: (event: string) => void;
  /** Triggered on item select */
  onSelectItem?: (newVal: string) => void;
  /** Set autosuggest initial initialValue. */
  initialValue?: string;
  config?: {
    /** Skip autosuggest filter. Work as `use-exact-values`. Used when working with elastic search filter which is more complex. */
    skipFilter?: boolean;
    /** Allow numeric values in the input. When enter numbers it will return the match numbers from item. */
    allowNumericValue?: boolean;
    /** Strip all words listed in the array from selected item initialValue. */
    itemsStripWordList?: string[];
    /** Applies logic for multiselect configuration of the component */
    isMultiSelect?: boolean;
  };
};
