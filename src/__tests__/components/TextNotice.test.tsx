import React from 'react';
import { render } from '@testing-library/react';
import { TextNotice } from '../../components/notifications/TextNotice';

describe('TextNotice component tests', () => {
  test('Text notice exist', () => {
    const { container } = render(<TextNotice background="primary" onClose={() => console.log('Cancel')}>test</TextNotice>);
    const textNoticeElement = container.querySelector('.notice-text-only');
    expect(textNoticeElement)
      .toBeInTheDocument();
  });


  test('TextNotice has correct attributes', () => {
    const { container } = render(<TextNotice background="primary" onClose={() => console.log('Cancel')}>test</TextNotice>);
    const textNoticeElement = container.querySelector('.notice-text-only');
    expect(textNoticeElement)
      .toHaveClass('bg-variant-brand-primary');
    expect(textNoticeElement)
      .toContainHTML("<div class='description'><p>test</a></p></div>");
  });
});
