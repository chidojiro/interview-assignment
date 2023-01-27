import React from 'react';
import { render } from '@testing-library/react';
import Notice from '../../components/notice/Notice';

describe('Notice component tests', () => {
  test('Notice exist', () => {
    const { container } = render(<Notice type="negative">test</Notice>);
    const noticeElement = container.querySelector('.notice-in-page');
    expect(noticeElement).toBeInTheDocument();
    expect(noticeElement).toHaveTextContent('test');
  });

  for (const [title, props, expectedIcon] of [
    ['Notice negative', { type: 'negative' }, 'warning'],
    ['Notice informative', { type: 'informative' }, 'info'],
    ['Notice positive', { type: 'positive' }, 'check'],
    ['Notice warning', { type: 'warning' }, 'warning'],
    ['Notice subtle', { type: 'subtle' }, 'face-sad'],
  ]) {
    test(`${title} has icon ${expectedIcon} `, () => {
      // @ts-ignore
      const { container } = render(<Notice {...props}>test</Notice>);
      const noticeIconElement = container.querySelector('svg use');

      expect(noticeIconElement).toHaveAttribute(
        'xlink:href',
        `/themes/custom/bluex/dist/assets/image/icons.svg#${expectedIcon}`,
      );
    });
  }
});
