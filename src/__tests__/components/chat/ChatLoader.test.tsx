import React from 'react';
import { render } from '@testing-library/react';
import ChatLoader from '../../../components/chat/ChatLoader';

describe('ChatLoader', () => {
  test('renders chat loader', () => {
    render(
      <ChatLoader />,
    );

    const container = document.querySelector('.loader__wrapper');
    expect(container).toBeInTheDocument();
    const loaderElement = container && container.querySelector('.loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
