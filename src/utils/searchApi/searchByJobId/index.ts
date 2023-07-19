import SearchApi, { GraphqlData } from '../index';
import { RXPJob } from '../types';

async function searchByJobId(url: string, apiKey: string, jobId: string, locale: string): Promise<RXPJob | null> {
  const searchApi = new SearchApi(apiKey, url);
  let job: RXPJob | null = null;

  const query: GraphqlData = {
    query: `
        query ($id: ID! $language: LanguageCode!) {
            getJob(id: $id language: $language) {
                workLocationAddress {locality}
                jobTitle,
                id,
                description { description } ,
                jobInformation { jobType }
                postingDetail { postingTime }
            }
        }`,
    variables: { id: jobId, language: locale },
  };

  try {
    const response = await searchApi.post(query);
    job = response.data.data.getJob;
  } catch (e) {
    // We need to actually log the error here.
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return job;
}

export default searchByJobId;
