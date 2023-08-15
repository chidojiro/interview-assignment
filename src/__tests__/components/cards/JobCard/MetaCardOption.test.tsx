import React from 'react';
import { render } from '@testing-library/react';
import MetaCardOption from '../../../../components/cards/JobCard/JobItemMetadata/MetaCardOption';

const mockData = {
  dataTestId: 'meta-card-option',
  iconType: 'mock-icon',
  svgProps: {
    // Add mock SVG properties if needed
  },
  fieldValue: 'Mock Field Value',
};

describe('MetaCardOption', () => {
  it('renders correctly with given props', () => {
    const { getByTestId, getByText, container } = render(<MetaCardOption {...mockData} />);

    const iconElement = container.querySelector('.icon');

    // Assert the existence of the component and its elements
    expect(getByTestId('meta-card-option')).toBeInTheDocument();
    expect(getByText('Mock Field Value')).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
