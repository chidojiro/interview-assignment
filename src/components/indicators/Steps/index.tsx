import React from 'react';
import cn from 'classnames';
import Icon from '../../common/Icon';
import { StepsProps, StepInterface } from './Steps.types';

function Steps({ steps, handleChangeStep, currentActiveStep }: StepsProps) {
  return (
    <ul className="indicator-step__list">
      {steps.map((step: StepInterface) => {
        const stepClass = cn('indicator-step__item', {
          'indicator-step__item--complete': step.completed && !step.active,
          'indicator-step__item--active': step.active,
        });

        const enableStep = (step.id <= currentActiveStep) || step.completed;

        return (
          // Change step events.
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li key={step.name} className={stepClass} onClick={() => (enableStep ? handleChangeStep(step.id, 'active') : undefined)}>
            <div className="indicator-step__dot">
              <div className="indicator-step__dot-inner">
                {step.completed ? <Icon iconType="check" iconClassName="icon fill-brand--off-white" /> : null}
                {step.active ? (
                  <span className="icon fill-brand--off-white">
                    <span className="blue-dot" />
                  </span>
                ) : null}
              </div>
            </div>
            <div className="indicator-step__text hidden--until-l">{step.translation}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default Steps;
