import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '../../../components/pagination/Pagination';

describe('PaginationComponent', () => {
  it('Pagination is rendered with all of its props', () => {
    const { container } = render(
      <Pagination
        pages={[
          { text: '1', url: '#' },
          { text: '2', url: '#' },
          { text: '3', url: '#' },
          { text: '4', url: '#' },
        ]}
        previousArrowLink={{ text: 'prev', url: '#' }}
        nextArrowLink={{ text: 'next', url: '#' }}
        currentPage="1"
      />,
    );
    const pagination = container.querySelector('.pagination');
    const paginationList = container.querySelector('.pagination__list');
    const paginationItems = container.querySelectorAll('.pagination__item');

    expect(pagination).toBeInTheDocument();
    expect(paginationList).toBeInTheDocument();
    expect(paginationItems[0]).toBeInTheDocument();
    expect(paginationItems[1]).toHaveTextContent('1');
    expect(paginationItems[2]).toHaveTextContent('2');
    expect(paginationItems[3]).toHaveTextContent('3');
    expect(paginationItems[4]).toHaveTextContent('4');
    expect(paginationItems[5]).toBeInTheDocument();

    expect(paginationItems.length).toBe(6);
  });
});
