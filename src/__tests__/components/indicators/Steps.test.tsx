import React from 'react';
import { render } from '@testing-library/react';
import Steps from '../../../components/indicators/Steps';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Steps Component', () => {
  const mockSteps = [
    {
      id: 1,
      name: 'Step 1',
      active: true,
      completed: false,
      visited: true,
      translation: 'Step 1 Translation',
    },
    {
      id: 2,
      name: 'Step 2',
      active: false,
      completed: false,
      visited: false,
      translation: 'Step 2 Translation',
    },
    {
      id: 3,
      name: 'Step 3',
      active: false,
      completed: false,
      visited: false,
      translation: 'Step 3 Translation',
    },
  ];

  it('renders the Steps component with the correct number of steps', () => {
    const { container } = render(<Steps steps={mockSteps} />);
    const stepItems = container.querySelectorAll('.indicator-step__item');

    expect(stepItems.length).toBe(mockSteps.length);
  });
});
