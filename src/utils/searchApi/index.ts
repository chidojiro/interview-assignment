import axios, { AxiosResponse } from 'axios';

export type GraphqlData = {
  operationName?: string;
  query?: string;

  // We need the value of the object to be any data type.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  variables?: { [id: string]: any };
};

class SearchApi {
  private axiosInstance = axios.create({});

  searchApiUrl = '';

  constructor(searchApiKey: string, searchApiUrl: string) {
    this.searchApiUrl = searchApiUrl;
    this.axiosInstance = axios.create({
      headers: {
        'client-id': searchApiKey,
      },
    });
  }

  async post<D = GraphqlData>(data?: D): Promise<AxiosResponse> {
    return this.axiosInstance.post(this.searchApiUrl, data);
  }
}

export default SearchApi;
