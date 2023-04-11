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
  isIconTabBar?: boolean
  RouterComponent?: React.FC<any>;
}

function checkUrlMatch(url: string | undefined, items: TabBarItem[]) {
  let hasTabUrlMatch = false;
  if (!url) return false;
  items.forEach((item) => {
    if (url === item.url) {
      hasTabUrlMatch = true;
    }
  });

  return hasTabUrlMatch;
}

function TabBar({
  items = [], url, isIconTabBar = true, RouterComponent,
}: TabBarProps) {
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
    if (!firstLoad) return;
    if (firstLoad && ref.current?.children) {
      const indexLeftArrow = Array.from(ref.current?.children).findIndex((item) =>
        item.hasAttribute('data-rs-tab-bar-fade-element-left'));
      ref.current?.removeChild(ref.current.children[indexLeftArrow]);
      const indexRightArrow = Array.from(ref.current?.children).findIndex((item) =>
        item.hasAttribute('data-rs-tab-bar-fade-element-right'));
      ref.current?.removeChild(ref.current.children[indexRightArrow]);
    }
    new OrbitComponent(ref.current);
  }, [url]);

  return (
    <>
      <div ref={ref} className={`tab-bar ${isIconTabBar ? 'tab-bar--icon' : ''}`} data-rs-tab-bar="" data-rs-tab-bar-animation-type="instant">
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
        {
          // Workaround for Orbit, because it requires to have an active item at all times
          !checkUrlMatch(url, items)
            && (
          // No need for content, a dummy that won't appear.
          // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
              <a href={url} className="tab-bar__item active hidden" data-rs-tab-bar-item="" />
            )
        }
        <div className="tab-bar__line" />
      </div>
    </>
  );
}

export default TabBar;
