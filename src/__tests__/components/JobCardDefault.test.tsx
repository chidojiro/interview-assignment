import React from 'react';
import { render } from '@testing-library/react';
import JobCardDefault from '../../components/JobCard/JobCardDefault';

describe('JobCardDefault tests', () => {
  test('Renders a JobCardDefault.', () => {
    render(<JobCardDefault label="Find jobs" jobsPageUrl="/jobs" />);

    const element = document.querySelector('.cards__footer');
    expect(element).toBeInTheDocument();
  });

  test(`JobCardDefault has icon.`, () => {
    render(<JobCardDefault label="Find jobs" jobsPageUrl="/jobs" />);
    const element = document.querySelector('.cards__item img');

    expect(element).toHaveAttribute('src', `/src/assets/img/Binoculars_illustration_UseBackgroundBlue_RGB.svg`);
  });

  test('Renders a JobCardDefault to have correct url.', () => {
    render(<JobCardDefault label="Find jobs" jobsPageUrl="/jobs" />);

    const element = document.querySelector('.cards__footer a');
    expect(element).toHaveAttribute('href', `/jobs`);
  });

  test('Renders a JobCardDefault to have correct label.', () => {
    render(<JobCardDefault label="Find jobs" jobsPageUrl="/jobs" />);

    const element = document.querySelector('.cards__footer a');
    expect(element).toHaveTextContent('Find jobs');
  });
});
