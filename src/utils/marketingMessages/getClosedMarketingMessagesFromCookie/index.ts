import { getCookie } from 'cookies-next';

const getClosedMarketingMessagesFromCookie = () => {
  const closedMarketingMessagesCookie = getCookie('closedMarketingMessages') as string | undefined;

  if (closedMarketingMessagesCookie) {
    return JSON.parse(closedMarketingMessagesCookie);
  }

  return [];
};

export default getClosedMarketingMessagesFromCookie;
