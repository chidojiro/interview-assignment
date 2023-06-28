import React, { useRef, useEffect } from 'react';
import withField from '../../../hoc/withField';
import FormGroup from '../FormGroup';
import Icon from '../../common/Icon';
import { DatePickerProps } from './DatePicker.types';

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/date-picker/)
 *
 * ---
 * *Every other passed props will get added to `<input>`. Like "data-attribute" and "aria-label"*
 *
 * **Wrapped with `FormGroup` component and supports all the props from it.**
 */

function DatePicker({
  ariaLabel,
  disabled = undefined,
  placeholder,
  _formGroupProps,
  altFormat,
  dateFormat,
  defaultDate,
  defaultDateIsCurrentDate,
  firstWeekDay,
  longMonths = '',
  shortMonths = '',
  shortWeeks = '',
  clearText,
  showWeekNumbers,
  minDate,
  maxDate,
  language,
  onChange,
  name,
  id,
  value,
}: DatePickerProps): React.ReactElement {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const { DatePicker: OrbitComponent } = require('@ffw/randstad-local-orbit/js/components/date-picker');
    new OrbitComponent(ref.current);
  }, [minDate, maxDate]);

  useEffect(() => {
    if (!ref.current) return;
    const target = (ref.current as HTMLInputElement | null)?.querySelector('input.input') as HTMLInputElement;
    if (target) {
      if (id) {
        target.id = id;
      }
      target.name = name;
    }
  }, [id, name]);

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
        target.name = name;
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
        <button className="button--clean" type="button" tabIndex={-1} aria-label={ariaLabel} />
        <input
          type="hidden"
          id={`${name}-datepicker`}
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
          data-rs-datepicker-clear={clearText}
          data-rs-datepicker-language={language}
          max={maxDate}
          min={minDate}
          required
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          className="flatpickr flatpickr-input"
        />
        <span className="button--icon-only button--form-group-style" role="button" aria-label={ariaLabel}>
          <Icon iconType="calendar" />
        </span>
      </div>
    </FormGroup>
  );
}

export default withField(DatePicker);
