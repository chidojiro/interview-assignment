import React from 'react';
import { render } from '@testing-library/react';
import JobCardCTA from '../../../../components/cards/JobCard/JobCardCTA';

describe('JobCardCTA tests', () => {
  test('Renders a JobCardCTA.', () => {
    render(<JobCardCTA label="Find jobs" jobsPageUrl="/jobs" />);

    const element = document.querySelector('.cards__footer');
    expect(element).toBeInTheDocument();
  });

  test('JobCardCTA has icon.', () => {
    render(<JobCardCTA label="Find jobs" jobsPageUrl="/jobs" />);
    const element = document.querySelector('.cards__item img');

    expect(element).toHaveAttribute('src', '/img/Binoculars_illustration_UseBackgroundBlue_RGB.svg');
  });

  test('Renders a JobCardCTA to have correct url.', () => {
    render(<JobCardCTA label="Find jobs" jobsPageUrl="/jobs" />);

    const element = document.querySelector('.cards__footer a');
    expect(element).toHaveAttribute('href', '/jobs');
  });

  test('Renders a JobCardCTA to have correct label.', () => {
    render(<JobCardCTA label="Find jobs" jobsPageUrl="/jobs" />);

    const element = document.querySelector('.cards__footer a');
    expect(element).toHaveTextContent('Find jobs');
  });
});
