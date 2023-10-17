import { randomBytes } from 'crypto';

function generateRandomHex(length = 8): string {
  const bytes = randomBytes(Math.ceil(length / 2));
  return bytes.toString('hex').substring(0);
}

export default generateRandomHex;
