import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Tag from '../../components/Tag/Tag';

describe('Tag component tests', () => {
  test('Tag renders correctly with required props', () => {
    function test() {
      return 0;
    }

    const { container } = render(
      <Tag
        id="tag-1"
        title="Teamplayer met lange titel"
        variant="secondary"
        onClick={() => test()}
      />,
    );
    const TagElement = container.getElementsByClassName('tag tag--remove  tag--secondary');
    waitFor(() => expect(TagElement).toBeInTheDocument());
  });
});
