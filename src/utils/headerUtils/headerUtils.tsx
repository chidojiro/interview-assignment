import { Menu, MenuItem, Routes } from './headerUtils.types';

export const getCurrentMenuItemUrl = (mainMenuItems:[], baseUrl: string, currentUrl: string) =>
  // Get the menu item url that best matches the current url
  // (from a two level navigation - without homepage "/" that will always match)
  mainMenuItems
    .map((item: Routes) => [item, item.children]).flat(2)
    .filter((item: Routes) => (baseUrl.startsWith(item.url) || currentUrl.startsWith(item.url))
      && item.url !== '/')
    .sort((a: Routes, b: Routes) => b.url.length - a.url.length)[0]?.url || null;

export const getMainMenu = (menu: Menu, baseUrl: string, currentUrl: string) => {
  const mainMenu = menu?.main || [];
  const currentMenuItemUrl = getCurrentMenuItemUrl(mainMenu, baseUrl, currentUrl);
  let menuHasActiveItem = false;

  return mainMenu.map((menuItem: MenuItem) => {
    const children = menuItem?.children.map((child:MenuItem) => ({
      ...child,
      // Set active trail
      isActive: child.url === currentMenuItemUrl || child.url === currentUrl,
    }));

    const hasChildActive = children.find((child: any) => child.isActive)?.isActive || false;
    // Set active trail
    const isActive = menuHasActiveItem ? false : hasChildActive || menuItem.url === currentMenuItemUrl;

    // Should have one active item.
    if (hasChildActive) {
      menuHasActiveItem = true;
    }

    return {
      ...menuItem,
      isActive,
      children,
    };
  });
};

export function findElement(menu: Routes, prop: string, value: string): { id: string, url: string, title: string } | null {
  let element = null;
  Object.keys(menu).find((menuItem) => {
    Object.keys(menu[menuItem]).find((item) => {
      if (menu[menuItem][item][prop] == value) {
        element = menu[menuItem][item];
      }
    });
  });

  return element;
}

export const getHeaderClass = (brand: string): string => {
  switch (brand) {
    case 'primary':
    case 'quaternary':
    case 'quinary':
    case 'senary':
    case 'tertiary':
      return `bg-variant-brand-${brand}`;
    case 'dark-blue':
    case 'blue':
    case 'turquoise':
    case 'red':
    case 'yellow':
    case 'off-white':
      return `bg-brand--${brand}`;
    case 'white':
      return 'bg-variant-white';
    default:
      return 'bg-variant-brand-primary';
  }
};

/**
 * Generate URL using the locale and the s3 mrnd menu links object.
 * @param locale - current locale.
 * @param elementId - element id (saved-jobs, logout, etc.)
 * @param submenuLinks - the s3 menu-links object.
 * @returns link used for routing.
 */

type Element = {
  id: string;
  url: string;
};

export function generateUrl(languagePrefix: string, locale: string, elementId: string, submenuLinks: Record<string, Element[]>): string {
  const element = findElement(submenuLinks[locale], 'id', elementId);
  const baseUrl = element?.url ?? '';
  return (languagePrefix + baseUrl).replace(/^\/\/?/, '/');
}
