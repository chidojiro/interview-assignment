import React from 'react';
import { Library } from '../../hooks/useLibrary';
import Icon from '../Icon';
import useOrbitComponent from '../../hooks/useOrbitComponent';

type TabBarItem = {
  title: string;
  url: string;
  icon: string;
};

interface TabBarProps extends Library {
  items: Array<TabBarItem>;
  RouterComponent?: React.FC<any>;
}

function TabBar({ items = [], RouterComponent }: TabBarProps) {
  const [ref] = useOrbitComponent('tab-bar');

  return (
    <div ref={ref} className="tab-bar tab-bar--icon" data-rs-tab-bar="" data-rs-tab-bar-animation-type="instant">
      {items.map((item) => {
        if (RouterComponent) {
          return (
            <RouterComponent key={item.icon} href={item.url} className="tab-bar__item" data-rs-tab-bar-item="">
              <Icon iconType={item.icon} />
              {item.title}
            </RouterComponent>
          );
        }
        return (
          <a key={item.icon} href={item.url} className="tab-bar__item" data-rs-tab-bar-item="">
            <Icon iconType={item.icon} />
            {item.title}
          </a>
        );
      })}
      <div className="tab-bar__line" />
    </div>
  );
}

export default TabBar;
