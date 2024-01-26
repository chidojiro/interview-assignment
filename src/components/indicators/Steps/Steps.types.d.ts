export type UpdateStepFunction = (stepId: number, propertyToUpdate: 'active' | 'completed') => Promise<void>;


export interface StepsProps {
  steps: StepInterface[];
  handleChangeStep: UpdateStepFunction;
}

export interface StepInterface {
  id: number;
  name: string;
  active: boolean;
  completed: boolean;
  visited?: boolean;
  translation: string;
  showSteps?: boolean;
}
