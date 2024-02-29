import React from 'react';
import cn from 'classnames';
import Icon from '../../common/Icon';
import { StepsProps, StepInterface } from './Steps.types';

function Steps({ steps }: StepsProps) {
  return (
    <ul className="indicator-step__list">
      {steps.map((step: StepInterface) => {
        const stepClass = cn('indicator-step__item', {
          'indicator-step__item--complete': step.skipped || (step.completed && !step.active),
          'indicator-step__item--active': step.active,
          'indicator-step__item--skipped': step.skipped,
        });
        return (
          <li
            key={step.name}
            className={stepClass}
          >
            <div className="indicator-step__dot">
              <div className="indicator-step__dot-inner">
                {step.completed && !step.skipped? <Icon iconType="check" iconClassName="icon fill-brand--off-white" /> : null}
                {step.active || step.skipped ? (
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
