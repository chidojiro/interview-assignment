import React from 'react';
import { render } from '@testing-library/react';
import ArrowLink from '../../../components/pagination/ArrowLink';

describe('ArrowLink component', () => {
  it('Arrow Link is rendered with all of its props', () => {
    const { container } = render(
      <ArrowLink as="a" data={{ text: 'prev', url: '#' }} direction="left" />,
    );

    const arrowLink = container.querySelector('.pagination__item');
    const use = container.querySelector('svg use');

    expect(arrowLink).toBeInTheDocument();
    expect(use).toBeInTheDocument();
  });
});
