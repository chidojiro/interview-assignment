export interface TextAreaProps {
  name: string;
  /** Enable text area auto resize. */
  autoResize?: boolean;
  /** Enable character count. */
  characterCounter?: boolean;
  /** Enable extend view. */
  expanded?: boolean;
  /** Labels for character count. Some has a placeholder. Overrides the default one. */
  characterCounterLabels?: {
    characters?: string;
    charactersLeft?: string;
  };
  /** Set text area placeholder value */
  placeholder?: string;
  /** Set text area max length */
  maxlength: number;
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
}
