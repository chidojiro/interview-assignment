export type StepStateEnum = 'active' | 'completed' | 'skipped';
export type UpdateStepFunction = (stepId: number, propertyToUpdate: StepStateEnum) => Promise<void>;


export interface StepsProps {
  steps: StepInterface[];
  handleChangeStep: UpdateStepFunction;
  disableOnClicks: boolean;
}

export interface StepInterface {
  id: number;
  name: string;
  active: boolean;
  completed: boolean;
  visited?: boolean;
  skipped?: boolean;
  translation: string;
  showSteps?: boolean;
}
