import type { UseAutosuggestParamTypes } from '../../../hooks/useAutosuggest/useAutosuggest.types';
import type { WithFieldProps } from '../../../hoc/withField';

export interface AutosuggestPropTypes extends WithFieldProps, UseAutosuggestParamTypes {
  customInput?: boolean;
  customInputLabel?: string;
  customInputIcon?: string;
  noResultsText?: string;
  _formGroupProps?: object;
  placeholder?: string;
  disabled?: boolean;
  debounce?: boolean;
}
