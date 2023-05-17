export type UserNameProps = {
  givenName: string;
  familyName: string;
  preferredName: string | undefined;
};

export type LinksType = {
  id?: string;
  linkActive?: boolean;
  url?: string;
  title?: string;
  icon?: string;
};
