export type refreshIdTokenResponse = {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  tokenType: string;
};

export type GdsConfigOptions = {
  apiKey: string;
  baseUrl: string;
};
