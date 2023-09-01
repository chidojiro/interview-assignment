import React from 'react';
import { render } from '@testing-library/react';
import MetaInfoCardItems from '../../../../../components/cards/MetaInfoCard/MetaInfoCardItems';

describe('MetaInfoCardItems', () => {
  const mockItems = [
    { icon: 'icon1', title: 'Item 1' },
    { icon: 'icon2', title: 'Item 2' },
    { icon: 'icon3', title: 'Item 3' },
  ];

  it('Renders the correct number of items', () => {
    const { container } = render(<MetaInfoCardItems items={mockItems} />);
    const items = container.querySelectorAll('.cards__meta-item');
    expect(items.length).toBe(mockItems.length);
  });

  it('Renders the items with correct icons and titles', () => {
    const { getByText } = render(<MetaInfoCardItems items={mockItems} />);
    mockItems.forEach((item) => {
      const itemElement = getByText(item.title).closest('.cards__meta-item');
      const svgIcon = itemElement?.querySelector('.icon');
      expect(svgIcon).toHaveClass('icon icon--inline');
      expect(itemElement).toHaveTextContent(item.title);
      expect(svgIcon).toBeInTheDocument();
      expect(svgIcon?.querySelector('use')).toHaveAttribute('xlink:href', `/img/icons.svg#${item.icon}`);
    });
  });
});
