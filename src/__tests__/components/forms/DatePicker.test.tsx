import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DatePicker from '../../../components/forms/DatePicker';

describe('DatePicker', () => {
  const defaultProps = {
    name: 'test',
    label: 'Test label',
  };

  const openDatePickerText = 'Open datepicker';

  it('renders without errors', () => {
    const { container } = render(<DatePicker {...defaultProps} />);

    const datePickerComponent = container.querySelector('.flatpickr');
    expect(datePickerComponent).toBeInTheDocument();
  });

  // it('renders the label correctly', () => {
  //   const { getByLabelText } = render(<DatePicker {...defaultProps} />);
  //   const labelElement = getByLabelText('Test label');
  //   expect(labelElement).toBeInTheDocument();
  // });

  // it('sets the placeholder correctly', () => {
  //   const { getByPlaceholderText } = render(<DatePicker {...defaultProps} placeholder="Select a date" />);
  //   const inputElement = getByPlaceholderText('Select a date');
  //   expect(inputElement).toBeInTheDocument();
  // });

  // it('disables the input when disabled prop is true', () => {
  //   const { getByRole } = render(<DatePicker {...defaultProps} disabled />);
  //   const inputElement = getByRole('textbox');
  //   expect(inputElement).toBeDisabled();
  // });

  // it('calls onChange prop when input value changes', () => {
  //   const handleChange = jest.fn();
  //   const { getByRole } = render(<DatePicker {...defaultProps} onChange={handleChange} />);
  //   const inputElement = getByRole('textbox');
  //   fireEvent.change(inputElement, { target: { value: '2022-05-05' } });
  //   expect(handleChange).toHaveBeenCalledWith('2022-05-05');
  // });

  // it('renders with the default date correctly', () => {
  //   const { getByRole } = render(<DatePicker {...defaultProps} defaultDate="2022-05-05" />);
  //   const inputElement = getByRole('textbox');
  //   expect(inputElement).toHaveValue('05-05-2022');
  // });

  // it('renders with the current date when defaultDateIsCurrentDate prop is true', () => {
  //   const { getByRole } = render(<DatePicker {...defaultProps} defaultDateIsCurrentDate />);
  //   const inputElement = getByRole('textbox');
  //   const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
  //   expect(inputElement).toHaveValue(currentDate);
  // });

  // it('renders with the correct date format when altFormat prop is set', () => {
  //   const { getByRole } = render(<DatePicker {...defaultProps} defaultDate="2022-05-05" altFormat="F j, Y" />);
  //   const inputElement = getByRole('textbox');
  //   expect(inputElement).toHaveValue('May 5, 2022');
  // });

  // it('renders with the correct date format when dateFormat prop is set', () => {
  //   const { getByRole } = render(<DatePicker {...defaultProps} defaultDate="2022-05-05" dateFormat="M j, Y" />);
  //   const inputElement = getByRole('textbox');
  //   expect(inputElement).toHaveValue('May 5, 2022');
  // });

  // it('renders with the correct first week day when firstWeekDay prop is set', () => {
  //   const { getByRole } = render(<DatePicker {...defaultProps} firstWeekDay="monday" />);
  //   const inputElement = getByRole('textbox');
  //   expect(inputElement).toHaveAttribute('data-rs-datepicker-first-week-day', 'monday');
  // });

  // it('renders with the correct long months when longMonths prop is set', () => {
  //   const { getByRole } = render(<DatePicker {...defaultProps} longMonths="janvier,février,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre" />);
  //   const inputElement = getByRole('textbox');
  //   expect(inputElement).toHaveAttribute('data-rs-datepicker-long-months', 'janvier,février,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre');
  // });

  // it('renders with the correct short months when shortMonths prop is set', () => {
  //   const { getByRole } = render(<DatePicker {...defaultProps} shortMonths="jan,fév,mar,avr,mai,jun,jul,aoû,sep,oct,nov,déc" />);
  //   const inputElement = getByRole('textbox');
  //   expect(inputElement).toHaveAttribute('data-rs-datepicker-short-months', 'jan,fév,mar,avr,mai,jun,jul,aoû,sep,oct,nov,déc');
  // });

  // it('should render input with default placeholder when no placeholder prop is passed', () => {
  //   const { getByPlaceholderText } = render(<DatePicker {...defaultProps} />);
  //   const inputElement = getByPlaceholderText('dd-mm-yyyy');
  //   expect(inputElement).toBeInTheDocument();
  // });

  // it('should render input with custom placeholder when placeholder prop is passed', () => {
  //   const { getByPlaceholderText } = render(<DatePicker {...defaultProps} placeholder="Select a date" />);
  //   const inputElement = getByPlaceholderText('Select a date');
  //   expect(inputElement).toBeInTheDocument();
  // });

  // it('should disable the input when disabled prop is set to true', () => {
  //   const { getByLabelText } = render(<DatePicker {...defaultProps} disabled />);
  //   const inputElement = getByLabelText(openDatePickerText) as HTMLButtonElement;
  //   expect(inputElement.disabled).toBe(true);
  // });

  // it('should pass through any extra props to the input', () => {
  //   const { getByLabelText } = render(<DatePicker {...defaultProps} data-testid="my-datepicker" />);
  //   const inputElement = getByLabelText(openDatePickerText) as HTMLButtonElement;
  //   expect(inputElement.getAttribute('data-testid')).toBe('my-datepicker');
  // });
});
