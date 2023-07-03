import React from 'react';
import { render } from '@testing-library/react';
import LinkElement from '../../../components/pagination/LinkElement';

describe('LinkElement', () => {
  it('LInk Element is rendered with all of its props', () => {
    const { container } = render(
      <LinkElement as="a" props={{ text: 'prev', url: '#' }}>
        <span id="link-element-content">Link element text content</span>
      </LinkElement>,
    );

    const linkElement = container.querySelector('a');
    const linkElementContent = container.querySelector('#link-element-content');

    expect(linkElement).toBeInTheDocument();
    expect(linkElementContent).toBeInTheDocument();
    expect(linkElement?.getAttribute('href')).toEqual('#');
    expect(linkElementContent?.textContent).toBe('Link element text content');
  });
});
