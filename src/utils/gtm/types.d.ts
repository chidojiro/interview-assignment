export interface CustomWindow extends Window {
  dataLayer: unknown[];
}

export type DataLayerEventObjectType = {
  [key: string]: string | number | object;
};

export type DataLayerUserObject = {
  login_status?: 'member' | 'guest',
  account_id?: string,
  type?: string,
  employee_number?: string,
  ip_address: string,
  signup_date?: string,
  cms_user_id: string,
  no_of_applications: string
}

export type CoreDataLayerEventObjectType = {
  page: {
    environment: string,
    country: string,
    language: string,
    type: string,
  },
  user: DataLayerUserObject,
};
