import React from 'react';
import {
  NavigationWrapperProps,
  NavigationWrapperReturnProps,
  ValidRenderedElement,
} from './NavigationWrapper.types';

/**
 *
 * This component adds the custom wrapper for BE-TT (tempo team).
 * This approach is for the Header of the tempoteam due to differences in the markup.
 * Other cases got handled with CSS whenever possible.
 */
function NavigationWrapper({ theme, children }: NavigationWrapperProps): NavigationWrapperReturnProps {
  if (theme === 'tt') {
    return (
      <div className="navigation__container">
        {children}
      </div>
    );
  }
  // Cast children to ValidRenderedElement to match the return type
  return children as ValidRenderedElement;
}

export default NavigationWrapper;
