import React from 'react';
import { render } from '@testing-library/react';
import Badge from '../../../components/common/Badge';

describe('Badge component tests', () => {
  test('Badge renders correctly with required props', () => {
    const { getByText } = render(<Badge>Label</Badge>);
    const badgeElement = getByText('Label');
    expect(badgeElement)
      .toBeInTheDocument();
  });

  test('Badge renders correctly with color prop', () => {
    const { container } = render(<Badge color="primary">Label</Badge>);
    expect(container.firstChild)
      .toHaveClass('badge--primary');
  });

  test('Badge renders correctly with icon prop', () => {
    const { container } = render(<Badge icon="check">Label</Badge>);
    expect(container.querySelector('.icon'))
      .toBeInTheDocument();
  });

  test('Badge renders correctly with size prop', () => {
    const { container } = render(<Badge size="l">Label</Badge>);
    expect(container.firstChild)
      .toHaveClass('badge--l');
  });
});
