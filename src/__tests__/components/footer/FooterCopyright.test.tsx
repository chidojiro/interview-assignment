import React from 'react';
import { render } from '@testing-library/react';
import FooterCopyright from '../../../components/footer/FooterCopyright';

describe('FooterCopyright', () => {
  test('should render a HTML', () => {
    const html = '<p data-testid="paragraph-tag">copyright text</p>';
    // Data from s3Bucket comes as string with HTML.
    // eslint-disable-next-line xss/no-mixed-html
    const { container, getByTestId } = render(<FooterCopyright text={html} />);
    const footer = container.querySelector('.footer__info');

    expect(getByTestId('paragraph-tag')).toBeTruthy();
    expect(footer?.textContent).toBe('copyright text');
  });
});
