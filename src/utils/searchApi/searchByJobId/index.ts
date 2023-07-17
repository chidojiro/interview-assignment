import SearchApi, { GraphqlData } from '../index';
import { RXPJob } from '../types';

async function searchByJobId(url: string, apiKey: string, jobId: string): Promise<RXPJob> {
  const searchApi = new SearchApi(apiKey, url);

  const query: GraphqlData = {
    query: `
        query ($id: ID!) {
            getJob(id: $id) {
                workLocationAddress {locality}
                jobTitle,
                id,
                description { description } ,
                jobInformation { jobType }
                postingDetail { postingTime }
            }
        }`,
    variables: { id: jobId },
  };

  const response = await searchApi.post(query);
  return response.data.data.getJob;
}

export default searchByJobId;
