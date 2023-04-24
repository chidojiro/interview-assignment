import React from 'react';
import cn from 'classnames';
import { TextArea as OrbitComponent } from '@ffw/randstad-local-orbit/original/js/components/text-area';
import { CharacterCounter } from '@ffw/randstad-local-orbit/original/js/components/character-counter';
import { AutoResize } from '@ffw/randstad-local-orbit/original/js/components/auto-resize';
/** Required libraries for this component
 * - character-count
 * - auto-resize
 * - textarea
 */

import withField from '../../hoc/withField';
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
  _formGroupProps,
  characterCounterLabels = {},
  maxlength = 250,
  ...props
}: TextAreaProps) {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.dataset.rendered) {
      ref.current.dataset.rendered = 'rendered';
      new OrbitComponent(ref.current);
      if (characterCounter) new CharacterCounter(ref.current);
      if (autoResize) new AutoResize(ref.current);
    }
  }, [autoResize, characterCounter]);

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
