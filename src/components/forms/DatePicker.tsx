import React, { useRef, useEffect } from 'react';
import withField, { WithFieldProps } from '../../hoc/withField';
import FormGroup from '../form-group/FormGroup';
import Icon from '../Icon';

interface DatePickerProps extends WithFieldProps {
  name: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  altFormat?: string;
  dateFormat?: string;
  defaultDate?: string;
  defaultDateIsCurrentDate?: true | '';
  firstWeekDay?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  longMonths?: string;
  shortMonths?: string;
  shortWeeks?: string;
  showWeekNumbers?: true | '';
  minDate?: string,
  maxDate?: string;
  language?: string;
  _formGroupProps?: object;
}

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/date-picker/)
 *
 * ---
 * *Every other passed props will get added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and supports all the props from it.**
 */

function DatePicker({
  disabled,
  placeholder,
  _formGroupProps,
  altFormat = 'd-m-Y',
  dateFormat = 'Y-m-d',
  defaultDate,
  defaultDateIsCurrentDate,
  firstWeekDay,
  longMonths = '',
  shortMonths = '',
  shortWeeks = '',
  showWeekNumbers,
  minDate,
  maxDate,
  language,
  onChange,
  ...props
}: DatePickerProps): React.ReactElement {
  const ref = useRef(null);

  const otherFieldProps = {
    ...(placeholder && { placeholder }),
    disabled,
    ...props,
  };

  useEffect(() => {
    if (!ref.current) return;
    const { DatePicker: OrbitComponent } = require('@ffw/randstad-local-orbit/js/components/date-picker');
    new OrbitComponent(ref.current);
  }, []);

  /**
   * The following useEffect attaches the onChange event to the second field
   * which Orbit creates with the Datepicker javascript.
   * Since we use formik - it sets the onChange on the Datepicker field itself,
   * but this is not initially transferred to the newly created field by the
   * javascript that Orbit ships, so we need to do it manually.
   *
   * The same technique applies in the previous app with the Datepicker
   * component. (the solution comes from there)
   */
  useEffect(() => {
    window.addEventListener('onFlatDatePickerChange', () => {
      if (!ref.current) return;

      const target = (ref.current as HTMLInputElement | null)?.querySelector('input.input') as HTMLInputElement;
      if (target) {
        target.name = props.name;
        if (onChange) {
          onChange({
            target,
          } as React.ChangeEvent<HTMLInputElement>);
        }
      }
    });
  // We don't want to add dependencies here, not needed.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormGroup {..._formGroupProps}>
      <div ref={ref} data-rs-datepicker="date-picker-component">
        <button className="button--clean" type="button" tabIndex={-1} aria-label="Open datepicker" />
        <input
          type="hidden"
          data-rs-datepicker-input=""
          data-rs-datepicker-alt-format={altFormat}
          data-rs-datepicker-date-format={dateFormat}
          data-rs-datepicker-default-date={defaultDate}
          data-rs-datepicker-default-is-current-date={defaultDateIsCurrentDate}
          data-rs-datepicker-first-week-day={firstWeekDay}
          data-rs-datepicker-long-months={longMonths}
          data-rs-datepicker-max-date={maxDate}
          data-rs-datepicker-min-date={minDate}
          data-rs-datepicker-position=""
          data-rs-datepicker-short-months={shortMonths}
          data-rs-datepicker-short-weeks={shortWeeks}
          data-rs-datepicker-weeknumbers={showWeekNumbers}
          data-rs-datepicker-clear=""
          data-rs-datepicker-language={language}
          max={maxDate}
          min={minDate}
          required
          placeholder="dd-mm-yyyy"
          id="date-picker-component"
          className="flatpickr flatpickr-input"
          {...otherFieldProps}
        />
        <span className="button--icon-only button--form-group-style" role="button" aria-label="">
          <Icon iconType="calendar" />
        </span>
      </div>
    </FormGroup>
  );
}

export default withField(DatePicker);
