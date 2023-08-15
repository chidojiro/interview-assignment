import React from 'react';
import { MetaCardOptionProps } from './MetaCardOption.types';
import Icon from '../../../../common/Icon';

function MetaCardOption({
    dataTestId,
    iconType,
    svgProps,
    fieldValue
}: MetaCardOptionProps) {
    
      return (
        <li className="cards__meta-item" data-testid={dataTestId}>
            <span className="icon icon--inline">
                <Icon svgProps={svgProps} iconType={iconType} iconClassName={null} />
            </span>
            {fieldValue}
        </li>
      );
}

export default MetaCardOption;