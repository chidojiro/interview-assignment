import { getCookie, setCookie } from 'cookies-next';
import { refreshIdTokenResponse } from './types';

const refreshIdToken = async (): Promise<refreshIdTokenResponse> => {
  const refreshToken = getCookie('RefreshToken') as string;
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
  setCookie('IdToken', refreshResponse.idToken);
  return refreshResponse;
};

export default refreshIdToken;
