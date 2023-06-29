import React from 'react';
import Icon from '../../../Icon';
import { MetaInfoCardItem, MetaInfoCardItemsProps } from './MetaInfoCardItems.types';

function MetaInfoCardItems({ items }: MetaInfoCardItemsProps) {
  return (
    <ul>
      {items.map((item: MetaInfoCardItem) => (
        <li className="cards__meta-item" key={item.title}>
          <Icon iconClassName="icon icon--inline" iconType={item.icon} />
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default MetaInfoCardItems;
