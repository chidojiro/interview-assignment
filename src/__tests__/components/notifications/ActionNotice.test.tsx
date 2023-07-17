import React from 'react';
import { render } from '@testing-library/react';
import ActionNotice from '../../../components/notifications/ActionNotice';

describe('Action notice component tests', () => {
  test('Action notice exist', () => {
    const { container } = render(<ActionNotice background="primary" primaryButtonText="yes" secondaryButtonText="no">test</ActionNotice>);
    const actionNoticeElement = container.querySelector('.notice-action');
    expect(actionNoticeElement)
      .toBeInTheDocument();
  });

  test('Action notice has correct class', () => {
    const { container } = render(<ActionNotice background="secondary" primaryButtonText="yes" secondaryButtonText="no">test</ActionNotice>);
    const actionNoticeElement = container.querySelector('.notice-action');
    expect(actionNoticeElement)
      .toHaveClass('bg-variant-brand-secondary');
  });
});
