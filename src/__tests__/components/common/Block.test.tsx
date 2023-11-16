import React from 'react';
import { render } from '@testing-library/react';
import Block from '../../../components/common/Block';
import Notice from '../../../components/notifications/Notice';

describe('Block left aligned exists', () => {
  test('should render block with left aligned text', () => {
    const { container } = render(
      <Block align="left" smallContentSize title="This is left aligned content.">
        This is example text
      </Block>,
    );

    const blockElement = container.querySelector('.block');
    const blockContent = blockElement && blockElement.querySelector('.block__content');
    expect(blockElement)
      .toBeInTheDocument();
    expect(blockContent)
      .toHaveClass('block__content--align-left');
  });
  test('should render block with right aligned text', () => {
    const { container } = render(
      <Block align="right" smallContentSize title="This is right aligned content.">
        This is example text
      </Block>,
    );

    const blockElement = container.querySelector('.block');
    const blockContent = blockElement && blockElement.querySelector('.block__content');
    expect(blockElement)
      .toBeInTheDocument();
    expect(blockContent)
      .toHaveClass('block__content--align-right');
  });

  test('renders with stacked class when stacked prop is true', () => {
    const { container } = render(
      <Block stacked>
        This is the block content.
      </Block>,
    );

    const blockWrapper = container.querySelector('.block__wrapper');
    expect(blockWrapper).toHaveClass('block__wrapper--stacked');
  });

  test('renders with Notice component', () => {
    const { container } = render(
      <Block blockHeaderClasses="block__content basic-layout" stacked title="This is left aligned title." expirationNotice={<Notice type="informative">Some date</Notice>}>
        This is the block content.
      </Block>,
    );

    const blockWrapper = container.querySelector('.notice-in-page');
    expect(blockWrapper).toHaveClass('notice-in-page--informative');
  });
});
