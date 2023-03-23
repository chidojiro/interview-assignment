import React, { useEffect, useRef, useState } from 'react';
import { TabBar as OrbitComponent } from '@ffw/randstad-local-orbit/original/js/components/tab-bar';
import Icon from '../Icon';

type TabBarItem = {
  title: string;
  url: string;
  icon?: string;
  isActive: boolean;
};

interface TabBarProps {
  items: Array<TabBarItem>;
  url?: string;
  RouterComponent?: React.FC<any>;
}

function TabBar({ items = [], url, RouterComponent }: TabBarProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.dataset.rendered) {
      ref.current.dataset.rendered = 'rendered';
      new OrbitComponent(ref.current);
      setFirstLoad(true);
    }
  }, [items]);

  useEffect(() => {
    if(!firstLoad) return;
    if (firstLoad && ref.current?.children) {
      const indexLeftArrow = Array.from(ref.current?.children).findIndex((item) =>
        item.hasAttribute('data-rs-tab-bar-fade-element-left'),
      );
      ref.current?.removeChild(ref.current.children[indexLeftArrow]);
      const indexRightArrow = Array.from(ref.current?.children).findIndex((item) =>
        item.hasAttribute('data-rs-tab-bar-fade-element-right'),
      );
      ref.current?.removeChild(ref.current.children[indexRightArrow]);
    }
    return new OrbitComponent(ref.current);
  }, [url]);

  return (
    <>
      <div ref={ref} className="tab-bar tab-bar--icon" data-rs-tab-bar="" data-rs-tab-bar-animation-type="instant">
        {items.map((item) => {
          if (RouterComponent) {
            return (
              <RouterComponent
                key={item.title}
                href={item.url}
                className={`tab-bar__item ${item.isActive ? 'active' : ''}`}
                data-rs-tab-bar-item=""
              >
                {item.icon && <Icon iconType={item.icon} />}
                {item.title}
              </RouterComponent>
            );
          }
          return (
            <a key={item.title} href={item.url} className={`tab-bar__item ${item.isActive ? 'active' : ''}`} data-rs-tab-bar-item="">
              {item.icon && <Icon iconType={item.icon} />}
              {item.title}
            </a>
          );
        })}
        <div className="tab-bar__line" />
      </div>
    </>
  );
}

export default TabBar;
