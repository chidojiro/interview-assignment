import { AxiosResponse } from 'axios';
import { TalentAppApi } from './talentAppApi';

export interface Favorites {
  totalElements: number;
}

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

// Function that checks if the current logged in user has an already uplaoded file.
const getFavorites = async (gdsApiKey: string, gdsApiUrl: string): Promise<Favorites | undefined> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  const response = await talentApi.get<Data, AxiosResponse<Favorites>>('/me/saved-jobs').catch((err) => {
    // Needed logging for error.
    // eslint-disable-next-line no-console
    console.error('GetFavorites Error: ', err);
    return undefined;
  });
  if (response) {
    return response?.data;
  }

  return undefined;
};

export { getFavorites };
