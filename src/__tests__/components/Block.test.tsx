import React from 'react';
import { render } from '@testing-library/react';
import Block from '../../components/Block';

describe('Block left aligned exists', () => {
  test('should render block with left aligned text', () => {
    const { container } = render(
      <Block align="left" smallContentSize title="This is left aligned content.">
        This is example text
      </Block>,
    );

    const blockElement = container.querySelector('.block');
    const blockContent = blockElement && blockElement.querySelector('.block__content');
    expect(blockElement).toBeInTheDocument();
    expect(blockContent).toHaveClass('block__content--align-left');
  });
  test('should render block with right aligned text', () => {
    const { container } = render(
      <Block align="right" smallContentSize title="This is right aligned content.">
        This is example text
      </Block>,
    );

    const blockElement = container.querySelector('.block');
    const blockContent = blockElement && blockElement.querySelector('.block__content');
    expect(blockElement).toBeInTheDocument();
    expect(blockContent).toHaveClass('block__content--align-right');
  });
});
