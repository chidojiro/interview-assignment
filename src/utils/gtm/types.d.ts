export interface CustomWindow extends Window {
  dataLayer: unknown[];
}

export type DataLayerEventObjectType = {
  [key: string]: string | number | object;
};
