import React, { useState } from 'react';
import { render } from '@testing-library/react';
import ShowMore from '../../components/ShowMore';

describe('ShowMore component tests', () => {
  test('should render show more indicator and the className', () => {
    const className = 'show-more__indicator';
    const [loading, setLoading] = useState(false);
    const { container } = render(
      <ShowMore
        loading={false}
        listLength={10}
        totalLength={30}
        textSeen="Seen Items"
        textViewMore="View More"
        ariaLabel="show more"
        loading={loading}
        onClick={() => setLoading(true)}
      />,
    );

    const iconElement = container.querySelector('.show-more__indicator');
    expect(iconElement).toHaveClass(className);
    expect(iconElement).toBeInTheDocument();
  });

  test('should render a tag and check for button button--m className', () => {
    const [loading, setLoading] = useState(false);
    const { container } = render(
      <ShowMore
        loading={false}
        listLength={10}
        totalLength={30}
        textSeen="Seen Items"
        textViewMore="View More"
        ariaLabel="show more"
        loading={loading}
        onClick={() => setLoading(true)}
      />,
    );
    const ShowMoreLink = container.querySelector('a');

    expect(ShowMoreLink)
      .toHaveAttribute(
        'class',
        'button button--m',
      );
  });

  test('should render textSeen prop value', () => {
    const [loading, setLoading] = useState(false);
    const { container } = render(
      <ShowMore
        loading={false}
        listLength={10}
        totalLength={30}
        textSeen="Seen Items"
        textViewMore="View More"
        ariaLabel="show more"
        loading={loading}
        onClick={() => setLoading(true)}
      />,
    );
    const SeenText = container.querySelector('.section-separator span');

    expect(SeenText)
      .toHaveTextContent('Seen Items');
  });

  test('should render textViewMore prop value', () => {
    const [loading, setLoading] = useState(false);
    const { container } = render(
      <ShowMore
        loading={false}
        listLength={10}
        totalLength={30}
        textSeen="Seen Items"
        textViewMore="View More"
        ariaLabel="show more"
        loading={loading}
        onClick={() => setLoading(true)}
      />,
    );
    const textViewMore = container.querySelector('.button.button--m');

    expect(textViewMore)
      .toHaveTextContent('View More');
  });
});
