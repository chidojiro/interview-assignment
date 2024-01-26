import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Steps from '../../../components/indicators/Steps';

const mockSteps = [
  {
    id: 1, name: 'Step 1', completed: true, active: false, translation: 'Step One',
  },
  {
    id: 2, name: 'Step 2', completed: false, active: true, translation: 'Step Two',
  },
  {
    id: 3, name: 'Step 3', completed: false, active: false, translation: 'Step Three',
  },
];

describe('Steps Component', () => {
  it('renders steps correctly', () => {
    const { getByText } = render(
      <Steps steps={mockSteps} handleChangeStep={async () => {}} currentActiveStep={2} />,
    );

    // Check if all step texts render
    mockSteps.forEach((step) => {
      const stepTextElement = getByText(step.translation);
      expect(stepTextElement).toBeInTheDocument();
    });

    // Check if the active step renders with correct styles
    const activeStepElement = getByText(`${mockSteps[1].translation}`);
    expect(activeStepElement.parentElement).toHaveClass('indicator-step__item--active');
  });

  it('handles click events correctly', () => {
    const handleChangeStepMock = jest.fn();
    const { getByText } = render(
      <Steps steps={mockSteps} handleChangeStep={handleChangeStepMock} currentActiveStep={2} />,
    );

    // Trigger click event on a step
    const stepElement = getByText(`${mockSteps[0].translation}`);
    fireEvent.click(stepElement);

    // Check if handleChangeStepMock calls with the correct arguments
    expect(handleChangeStepMock).toHaveBeenCalledWith(mockSteps[0].id, 'active');
  });

  it('handles click events on disabled steps correctly', () => {
    const handleChangeStepMock = jest.fn();
    const { getByText } = render(
      <Steps steps={mockSteps} handleChangeStep={handleChangeStepMock} currentActiveStep={2} />,
    );

    // Trigger click event on a disabled step
    const disabledStepElement = getByText(`${mockSteps[2].translation}`);
    fireEvent.click(disabledStepElement);

    // Check if handleChangeStepMock is not called for disabled steps
    expect(handleChangeStepMock).not.toHaveBeenCalled();
  });
});
