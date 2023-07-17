import {
  findElement,
  getHeaderClass,
} from '../../utils/headerUtils/headerUtils';

describe('findElement', () => {
  it('finds an element in the menu object based on property and value', () => {
    const menu = {
      en: {
        item1: { id: 'item1', url: '/item1', title: 'Item 1' },
        item2: { id: 'item2', url: '/item2', title: 'Item 2' },
      },
      fr: {
        item1: { id: 'item1', url: '/item1-fr', title: 'Item 1 (FR)' },
        item2: { id: 'item2', url: '/item2-fr', title: 'Item 2 (FR)' },
      },
    };
    const prop = 'url';
    const value = '/item2';
    const result = findElement(menu, prop, value);
    expect(result).toEqual({ id: 'item2', url: '/item2', title: 'Item 2' });
  });

  it('returns null when no element is found', () => {
    const menu = {
      en: {
        item1: { id: 'item1', url: '/item1', title: 'Item 1' },
        item2: { id: 'item2', url: '/item2', title: 'Item 2' },
      },
      fr: {
        item1: { id: 'item1', url: '/item1-fr', title: 'Item 1 (FR)' },
        item2: { id: 'item2', url: '/item2-fr', title: 'Item 2 (FR)' },
      },
    };
    const prop = 'url';
    const value = '/item3';
    const result = findElement(menu, prop, value);
    expect(result).toBeNull();
  });
});

describe('getHeaderClass', () => {
  it('returns the header class based on the brand', () => {
    const brand = 'primary';
    const result = getHeaderClass(brand);
    expect(result).toBe('bg-variant-brand-primary');
  });

  it('returns the default header class when no matching brand is found', () => {
    const brand = 'unknown';
    const result = getHeaderClass(brand);
    expect(result).toBe('bg-variant-brand-primary');
  });
});
