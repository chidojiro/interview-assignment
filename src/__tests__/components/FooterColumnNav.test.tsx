import React from 'react';
import { render } from '@testing-library/react';
import FooterColumnNav from '../../components/footer/FooterColumnNav';

const createColumn = (title = 'column1') => ({
  title,
  url: '/',
  children: [
    {
      title: 'employer solutions',
      url: '/',
      children: [
        {
          title: 'staffing & recruitment',
          url: '/employers/staffing-recruitment/staffing-and-recruitment',
          children: [],
        },
        {
          title: 'HR consulting',
          url: '/employers/hr-consulting',
          children: [],
        },
      ],
    },
    {
      title: 'hire employees',
      url: '/',
      children: [
        {
          title: 'administrative support',
          url: '/employers/areas-of-expertise/administrative-support/',
          children: [],
        },
        {
          title: 'customer support',
          url: '/employers/areas-of-expertise/contact-centre-and-customer-care/',
          children: [],
        },
        {
          title: 'engineering',
          url: '/employers/areas-of-expertise/engineering/',
          children: [],
        },
      ],
    },
  ],
});

const columns = [
  createColumn(),
  createColumn('column2'),
];

describe('FooterColumnNav', () => {
  test('should render the same columns count as the one provided', () => {
    const { container } = render(<FooterColumnNav columns={columns} />);
    expect(container.querySelectorAll('.footer__column').length).toBe(columns.length);
  });

  test('should not render links list container', () => {
    const emptyColumn = [{
      title: 'column title',
      url: '/col-url/',
      children: [],
    }];

    const { container } = render(<FooterColumnNav columns={emptyColumn} />);
    expect(container.querySelector('.extensive-link-list')).toBeFalsy();
  });

  test('should render column title without links list', () => {
    const emptyColumn = [{
      title: 'column title',
      url: '/col-url/',
      children: [
        {
          title: 'column title',
          url: '/',
          children: [],
        },
      ],
    }];

    const { container } = render(<FooterColumnNav columns={emptyColumn} />);
    expect(container.querySelector('.extensive-link-list__list-title')?.textContent).toBe('column title');
    expect(container.querySelector('.collapsible__content ul')).toBeFalsy();
  });
});
