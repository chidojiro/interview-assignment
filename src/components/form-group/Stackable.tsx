import React from 'react';
import cn from 'classnames';

interface StackableProps {
  className?: string;
  label: string;
  error?: string;
  description?: string,
  required?: boolean,
  optionalLabel?: string,
  capitalize?: boolean,
  /** Visually will hide the label, but it will remain in the markup. For a11y reasons. */
  hideLabel?: boolean,
  /** @ignore */
  children?: any,
};

/**
 * Stackable form group component.
 *
 * Groups form component with same name. It provides functionality like label, errors, descriptions and etc. Same as FormGroup, but for stacked components. See example in form components.
 *
 * ---
 * ### Cannot be used as a standalone component.
 */
const Stackable = ({
  children,
  error,
  description,
  label,
  className,
  capitalize,
  hideLabel = false,
  optionalLabel = 'optional',
  required = true,
}: StackableProps) => {
  if (!label) {
    console.error('Missing label for the legend. Fieldset tag requires a legend.');
  }

  let legend = label;

  if (label && capitalize) {
    legend = label.charAt(0).toUpperCase() + label.slice(1);
  }

  return (
    <fieldset
      className={cn('form-group', 'form-group--selection-control', className, {
        'form-group--error': error,
      })}>
      <legend className={cn('form-group__label', { hidden: hideLabel })}>
        {legend}
        {!required && <span className='form-group__optional'> {optionalLabel}</span>}
      </legend>
      {React.Children.map(children, (child) => {
        return (
          <div className='form-group__input'>
            {React.cloneElement(child, {
              withFormGroup: false,
            })}
          </div>
        );
      })}
      {error && <div className='form-group__feedback'>{error}</div>}
      {description && <div className='form-group__message'>{description}</div>}
    </fieldset>
  );
};

export default Stackable;
