import React, { useEffect, useRef } from 'react';
import { Collapsible } from '@ffw/randstad-local-orbit/js/components/collapsible';
import { Toggable } from '@ffw/randstad-local-orbit/js/components/toggable';

interface AccordionItemInterface {
  children: React.ReactNode,
  title: string,
  subtitle?: string,
  expanded?: boolean,
  HeadingTag?: keyof JSX.IntrinsicElements,
  ariaLabel: string,
}

/**
 * Expanding and collapsing sections of content. See [here](https://randstad.design/components/core/accordion/)
 *
 */
function AccordionItem({
  children,
  title,
  subtitle,
  expanded = false,
  HeadingTag = 'h3',
  ariaLabel = '',
  ...attr
}: AccordionItemInterface) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current?.hasAttribute('data-rs-collapsible') && ref.current?.hasAttribute('data-rs-toggable') && !ref.current.hasAttribute('data-rendered')) {
      new Collapsible(ref.current);
      new Toggable(ref.current);
      ref.current.dataset.rendered = 'rendered';
    }
  }, []);

  return (
    <li {...attr} className="link-list__item">
      <div
        className={`collapsible__trigger ${expanded ? 'icon__toggler--active' : ''}`}
        data-rs-collapsible=""
        role="button"
        aria-expanded={expanded}
        aria-label={ariaLabel}
        data-rs-toggable=""
        ref={ref}
        data-scl=""
      >
        <HeadingTag className="link-list__link">
          {title}
          {subtitle && <p className="text--alternative pt-xs mb-none">{subtitle}</p>}
          <span className="hidden--from-l toggle-arrow icon">
            <svg>
              <use xlinkHref="/src/assets/img/icons.svg#chevron-down" />
            </svg>
          </span>
          <span className="hidden--until-l toggle-arrow icon icon--l">
            <svg>
              <use xlinkHref="/src/assets/img/icons.svg#chevron-down-30" />
            </svg>
          </span>
        </HeadingTag>
      </div>
      <div
        className="collapsible__content body-copy"
        data-rs-collapsible-content={`${expanded ? 'expanded' : ''}`}
        aria-hidden={!expanded}
      >
        <div className="collapsible__content--wrapper">{children}</div>
      </div>
    </li>
  );
}

export default AccordionItem;
