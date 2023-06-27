import React from 'react';
import { getBackground } from '../../../utils/getBackground';
import useOrbitComponent from '../../../hooks/useOrbitComponent';
import { NavigationModalProps } from './NavigationModal.types';

function NavigationModal({ children }: NavigationModalProps) {
  const modalBackground = getBackground('tertiary');
  const [ref] = useOrbitComponent('navigation');

  return (
    <div ref={ref} className="modal modal--navigation hidden--from-l" data-rs-navigation="true">
      <div className={`modal__dialog ${modalBackground}`}>
        <div className="modal__header" data-rs-navigation-modal-header="true" />
        <div className="modal__main" data-rs-navigation-modal-main="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export default NavigationModal;
