type Menu = {
  main?: [];
}

type MenuItem = {
  title: string;
  url: string;
  children: [];
  icon: string;
}

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

    const hasChildActive = children.find((child:any) => child.isActive)?.isActive || false;
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

export const getCurrentMenuItemUrl = (mainMenuItems:[], baseUrl: string, currentUrl: string) =>
  // Get the menu item url that best matches the current url
  // (from a two level navigation - without homepage "/" that will always match)
  mainMenuItems
    .map((item:Routes) => [item, item.children]).flat(2)
    .filter((item:Routes) => (baseUrl.startsWith(item.url) || currentUrl.startsWith(item.url))
      && item.url !== '/')
    .sort((a:Routes, b:Routes) => b.url.length - a.url.length)[0]?.url || null;
export type Routes = {
  [key: string]: any;
}
export type LocalizationTypes = {
  locales: string[] | undefined,
  locale: string | undefined,
  defaultLocale: string | undefined,
}

export function findElement(menu: Routes, prop: string, value: string): {id: string, url: string, title: string} | null {
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
export const getLanguageItems = (currentUrl: string, localization: LocalizationTypes, routes: Routes) => {
  const { locales, locale, defaultLocale } = localization;
  if (locales && locale && defaultLocale) {
    if (routes && routes[locale]) {
      const matchedItem = findElement(routes[locale], 'url', currentUrl);
      return locales.map((language) => {
        const languagePrefix = language === defaultLocale ? '' : `/${language}`;
        let foundUrl: any = matchedItem && matchedItem.id ? findElement(routes[language], 'id', matchedItem.id) : '';
        foundUrl = foundUrl && foundUrl.url ? foundUrl.url : '';
        const itemUrl = `${languagePrefix}${foundUrl}`;
        return {
          language,
          isActive: language === locale,
          url: itemUrl,
        };
      });
    }
  } else return [];
};

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
