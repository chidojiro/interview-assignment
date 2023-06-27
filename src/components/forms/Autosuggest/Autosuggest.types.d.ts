import { UseAutosuggestParamTypes } from '../../../hooks/useAutosuggest';
import { WithFieldProps } from '../../../hoc/withField';

export interface AutosuggestPropTypes extends WithFieldProps, UseAutosuggestParamTypes {
  noResultsText?: string;
  _formGroupProps?: object;
  placeholder?: string;
}
