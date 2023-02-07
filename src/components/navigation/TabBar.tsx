import React from 'react';
import useLibrary, { Library } from '../../hooks/useLibrary';
import Icon from '../Icon';

type TabBarItem = {
  text: string;
  href: string;
  icon: string;
}

interface TabBar extends Library {
  items: Array<TabBarItem>;
  RouterComponent?: React.FC<any>;
}

function TabBar({ items = [], libs, RouterComponent }: TabBar) {
  const [ref] = useLibrary<HTMLDivElement>(libs);

  return (
    <div ref={ref} className="tab-bar tab-bar--icon" data-rs-tab-bar="" data-rs-tab-bar-animation-type="instant" data-rendered="rendered">
      {items.map((item, index) => {
        if (RouterComponent) {
          return (
            <RouterComponent key={index} href={item.href} className={`tab-bar__item`} data-rs-tab-bar-item="">
              <Icon iconType={item.icon} />
              {item.text}
            </RouterComponent>
          )
        }
        return (
          <a key={index} href={item.href} className={`tab-bar__item`} data-rs-tab-bar-item="">
            <Icon iconType={item.icon} />
            {item.text}
          </a>
        )
      })}
    </div>
  );
}

export default TabBar;
