import SearchApi, { GraphqlData } from '../index';

async function searchByJobId(url: string, apiKey: string, jobId: string) {
  const searchApi = new SearchApi(apiKey, url);

  const query: GraphqlData = {
    query: `
        query ($id: ID!) {
            getJob(id: $id) {
                jobTitle
            }
        }`,
    variables: { id: jobId },
  };

  return searchApi.post(query);
}

export default searchByJobId;
