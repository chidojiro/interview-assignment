import { AxiosRequestConfig } from 'axios';
import isUint64 from '../../../isUint64';

function generateCorelationId(request?: AxiosRequestConfig) {
  if (request && request.headers) {
    const clientCorrelationId = request.headers['x-correlation-id'] as string;
    if (clientCorrelationId && clientCorrelationId.length && isUint64(clientCorrelationId[0])) return clientCorrelationId[0]; // generate random traceId
  }
  // the range of generated number is 0 - 18446744073709551615
  const rnd1Max = 1844674407 + 1;
  const rnd2MaxPart = 3709551615 + 1;
  const rnd2MaxFull = 9999999999 + 1; // 10^10 ~ 0 - 9999999999 (10 digits)
  const zerosPad = '0000000000';
  const part1 = Math.floor(Math.random() * rnd1Max);
  const part2 = Math.floor(Math.random() * (part1 === rnd1Max - 1 ? rnd2MaxPart : rnd2MaxFull)).toString();
  return part1 === 0 ? part2 : part1 + zerosPad.slice(0, zerosPad.length - part2.length) + part2;
}

export default generateCorelationId;
