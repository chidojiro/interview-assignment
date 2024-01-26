export type UpdateStepFunction = (stepId: number, propertyToUpdate: 'active' | 'completed') => Promise<void>;


export interface StepsProps {
  steps: StepInterface[];
  handleChangeStep: UpdateStepFunction;
  currentActiveStep: number;
}

export interface StepInterface {
  id: number;
  name: string;
  active: boolean;
  completed: boolean;
  translation: string;
  showSteps?: boolean;
}
