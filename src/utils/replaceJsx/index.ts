import { MatchCallback } from './replaceJsx.types';

/**
 * Replace html with JSX in regex match.
 *
 * @param  {string} content
 * @param  {RegExp} regexp
 * @param  {MatchCallback} callback
 */
export default (content: string, regexp: RegExp, callback: MatchCallback) => {
  const output = [];
  const rule = regexp;
  let result;
  let c = content;
  let key = 0;
  // For simplicity’s sake we are iterating through all matches in while loop.
  // eslint-disable-next-line no-cond-assign
  while ((result = rule.exec(<string>c)) !== null) {
    const m = result[0];
    const i = result.index;

    if (i !== 0) {
      output.push(c.substring(0, i));
    }
    key += 1;
    output.push(callback(m, key));
    c = c.substring(i + m.length, c.length);
    rule.lastIndex = 0;
  }
  if (c !== '') {
    output.push(c);
  }
  return output;
};
