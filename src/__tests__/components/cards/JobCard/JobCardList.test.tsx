import React from 'react';
import { render } from '@testing-library/react';
import JobCardList from '../../../../components/cards/JobCard/JobCardList';

describe('JobCardList', () => {
  it('renders the component with grid view by default', () => {
    const { getByTestId } = render(<div data-testid="test-id"><JobCardList>Card inside</JobCardList></div>);
    const list = getByTestId('test-id');
    expect(list).toBeInTheDocument();
    expect(list.firstChild).toBeInTheDocument();
    expect(list.firstChild?.firstChild).toHaveClass('cards__list--format-grid');
  });

  it('renders the component with carousel view when isSlider is true', () => {
    const { getByTestId } = render(<div data-testid="test-id"><JobCardList isSlider>Card 1</JobCardList></div>);
    const list = getByTestId('test-id');
    expect(list).toBeInTheDocument();
    expect(list.firstChild).toBeInTheDocument();
    expect(list.firstChild?.firstChild).toHaveClass('cards__list--format-carousel');
  });

  it('applies additional carousel class when isSlider is true', () => {
    const { getByTestId } = render(<div data-testid="test-id"><JobCardList isSlider>Card 1</JobCardList></div>);
    const list = getByTestId('test-id');
    expect(list.firstChild?.firstChild).toHaveClass('carousel--on-s');
    expect(list.firstChild?.firstChild).toHaveClass('carousel--on-m');
  });

  it('renders the children components', () => {
    const testChild = <li>Child element</li>;
    const { getByText } = render(<JobCardList>{testChild}</JobCardList>);
    const childElement = getByText('Child element');
    expect(childElement).toBeInTheDocument();
  });

  it('applies custom active view class when activeView is provided', () => {
    const { getByTestId } = render(<div data-testid="test-id"><JobCardList activeView="list">Card 1</JobCardList></div>);
    const list = getByTestId('test-id');
    expect(list.firstChild?.firstChild).toHaveClass('cards__list--format-list');
  });
});
