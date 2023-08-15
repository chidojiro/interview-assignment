import { refreshIdTokenResponse } from './types';
import authStorage from '../authStorage';

const refreshIdToken = async (): Promise<refreshIdTokenResponse> => {
  const refreshToken = authStorage.getRefreshToken();
  const apiKey = process.env.NEXT_PUBLIC_DOMAIN_SERVICES_API_PUBLIC_KEY as string;
  if (!refreshToken) {
    return Promise.reject();
  }

  const params = new URLSearchParams([
    ['apikey', apiKey],
    ['refreshToken', refreshToken],
  ]);

  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVICES_API_BASE_URL}/tokens/refresh?${params}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const refreshResponse = await response.json();

  authStorage.setIdToken(refreshResponse.idToken);

  return refreshResponse;
};

export default refreshIdToken;
