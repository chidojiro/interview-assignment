export interface Theme {
  theme?: 'sph' | 'tt' | 'default';
}

export interface ItemsBase {
  isActive: boolean;
  url: string;
  title: string;
}

export interface Items extends ItemsBase {
  children: Items[];
}
