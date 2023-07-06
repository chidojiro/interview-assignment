import React from 'react';
import {render, screen} from '@testing-library/react';
import PagePreloader from '../../../components/loaders/PagePreloader';
import ShowMoreToggle from "../../../components/show-more/ShowMoreToggle";

describe('PagePreload component tests', () => {
  test('PagePreloader renders correctly', () => {
    const { container } = render(<PagePreloader />);
    const pagePreloader = container.querySelector('.block__content.block__content--xs.block__content--align-right');

    expect(pagePreloader)
      .toBeInTheDocument();
  });

  test('PagePreloader should render without header', () => {
    const { container } = render(<PagePreloader header={false} />);
    expect(container.querySelector('.block__header')).not.toBeInTheDocument();
  });
});
