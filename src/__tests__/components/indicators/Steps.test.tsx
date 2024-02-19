import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  const mockHandleChangeStep = jest.fn();

  it('renders the Steps component with the correct number of steps', () => {
    const { container } = render(<Steps steps={mockSteps} handleChangeStep={mockHandleChangeStep} />);
    const stepItems = container.querySelectorAll('.indicator-step__item');

    expect(stepItems.length).toBe(mockSteps.length);
  });
  // Descoped as not orbit behavior.
  // eslint-disable-next-line jest/no-commented-out-tests,write-good-comments/write-good-comments
  // it('calls handleChangeStep when a step is clicked and it is enabled', () => {
  //   const { getByText } = render(<Steps steps={mockSteps} handleChangeStep={mockHandleChangeStep} />);
  //   const stepItem = getByText(`${mockSteps[0].translation}`);
  //
  //   fireEvent.click(stepItem as Element);
  //
  //   expect(mockHandleChangeStep).toHaveBeenCalledTimes(1);
  // });

  it('does not call handleChangeStep when a step is clicked and it is disabled', () => {
    const { getByText } = render(<Steps steps={mockSteps} handleChangeStep={mockHandleChangeStep} />);
    const disabledStepItem = getByText(`${mockSteps[1].translation}`);

    fireEvent.click(disabledStepItem as Element);

    expect(mockHandleChangeStep).not.toHaveBeenCalled();
  });
});
