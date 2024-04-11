import SearchApi, { GraphqlData } from '../index';
import { RXPJob } from '../types';

async function searchByJobId(url: string, apiKey: string, jobId: string, locale: string, opcoCodesParam: string | string[]): Promise<RXPJob | null> {
  const searchApi = new SearchApi(apiKey, url);
  let job: RXPJob | null = null;
  const opcoCodes = Array.isArray(opcoCodesParam) ? opcoCodesParam : [opcoCodesParam];
  const query: GraphqlData = {
    query: `
        query ($id: ID! $language: LanguageCode! $opcoCodes: [String!]!) {
            getJob(id: $id language: $language opcoCodes: $opcoCodes) {
                workLocationAddress {locality administrativeArea}
                clientDetail { name }
                payRates {
                  salaryMin
                  salaryMax
                  currencyCode
                  currencySymbol
                  unit
                  unitDisplay
                },
                jobTitle,
                id,
                description { description } ,
                jobInformation { jobType }
                postingDetail { postingTime }
            }
        }`,
    variables: { id: jobId, language: locale, opcoCodes },
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
