import React from 'react';
import { NavigationWrapperProps } from './NavigationWrapper.types';

/**
 *
 * This componentadds the custom wrapper for BE-TT (tempo team).
 * This approach is for the Header of the tempoteam due to differences in the markup.
 * Other cases got handled with CSS whenever possible.
 */
function NavigationWrapper({ theme, children }: NavigationWrapperProps) {
  if (theme === 'tt') {
    return (
      <div className="navigation__container">
        {children}
      </div>
    );
  }
  return children;
}

export default NavigationWrapper;
