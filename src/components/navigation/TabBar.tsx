import React, { useEffect, useRef } from 'react';
import { TabBar as OrbitComponent } from '@ffw/randstad-local-orbit/original/js/components/tab-bar';
import Icon from '../Icon';

type TabBarItem = {
  title: string;
  url: string;
  icon: string;
  isActive: boolean;
};

interface TabBarProps {
  items: Array<TabBarItem>;
  RouterComponent?: React.FC<any>;
}

function TabBar({ items = [], RouterComponent }: TabBarProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.dataset.rendered) {
      ref.current.dataset.rendered = 'rendered';
      new OrbitComponent(ref.current);
    }
  }, [items]);

  return (
    <div ref={ref} className="tab-bar tab-bar--icon" data-rs-tab-bar="" data-rs-tab-bar-animation-type="instant">
      {items.map((item) => {
        if (RouterComponent) {
          return (
            <RouterComponent key={item.icon} href={item.url} className={`tab-bar__item ${item.isActive ? 'active' : ''}`} data-rs-tab-bar-item="">
              <Icon iconType={item.icon} />
              {item.title}
            </RouterComponent>
          );
        }
        return (
          <a key={item.icon} href={item.url} className={`tab-bar__item ${item.isActive ? 'active' : ''}`} data-rs-tab-bar-item="">
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
