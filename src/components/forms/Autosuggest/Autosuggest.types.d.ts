import { UseAutosuggestParamTypes } from '../../../hooks/useAutosuggest/useAutosuggest.types';
import { WithFieldProps } from '../../../hoc/withField';

export interface AutosuggestPropTypes extends WithFieldProps, UseAutosuggestParamTypes {
  customInput?: boolean;
  customInputLabel?: string;
  noResultsText?: string;
  _formGroupProps?: object;
  placeholder?: string;
}
