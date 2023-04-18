import React from 'react';
import cn from 'classnames';

import withField from '../../hoc/withField';
import useLibrary from '../../hooks/useLibrary';
import FormGroup from '../form-group/FormGroup';

const defaultCharacterCounterLabels = {
  characters: 'characters',
  charactersLeft: '@characters characters left',
};

interface TextAreaProps {
  name: string,
  /** Enable text area auto resize. */
  autoResize?: boolean,
  /** Enable character count. */
  characterCounter?: boolean,
  /** Enable extend view. */
  expanded?: boolean,
  /** Labels for character count. Some has a placeholder. Overrides the default one. */
  characterCounterLabels?: {
    characters?: string,
    charactersLeft?: string,
  },
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time.
   * Required libraries for this component
   * - character-count
   * - auto-resize
   * - textarea
   */
  libs: [],
  /** Set text area max length */
  maxlength: number,
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object,
}

/**
 * A field to enter large datasets in a pre defined format. See [here](https://randstad.design/components/core/forms/text-area/)
 *
 * ---
 * *Every other passed props will be added to `<textarea>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */
function TextArea({
  autoResize = true,
  characterCounter,
  expanded,
  libs,
  _formGroupProps,
  characterCounterLabels = {},
  maxlength = 250,
  ...props
}: TextAreaProps) {
  const [ref] = useLibrary(libs);

  const characterCounterAttributes = characterCounter
    ? {
      'data-rs-character-counter-maxlength': maxlength,
      'data-rs-character-counter': props.name,
      'data-maxlength': maxlength,
      'data-rs-character-counter-labels': JSON.stringify({
        ...defaultCharacterCounterLabels,
        ...characterCounterLabels,
      }),
    }
    : {};

  const autoResizeAttributes = autoResize
    ? {
      'data-rs-auto-resize': '',
    }
    : {};

  const expandedAttributes = autoResize
    ? {
      'data-rs-textarea': 'expand',
      rows: 1,
    }
    : {};

  return (
    <FormGroup {..._formGroupProps}>
      <div
        className={cn('form-group__input', {
          'form-group__character-count': characterCounter,
        })}
      >
        <textarea
          {...props}
          className={cn({
            'fixed-size': !autoResize,
            'textarea--expand': expanded,
          })}
          data-scl=""
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          {...characterCounterAttributes}
          {...expandedAttributes}
          {...autoResizeAttributes}
        />
      </div>
      {characterCounter ? (
        <div className="form-group__characters" data-rs-character-counter-output={props.name} />
      ) : null as never}
    </FormGroup>
  );
}

export default withField(TextArea);
