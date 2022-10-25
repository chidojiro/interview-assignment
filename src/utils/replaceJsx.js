/**
 * Replace html with JSX in regex match.
 *
 * @param  {React.Node} content
 * @param  {RegExp} regexp
 * @param  {JSX} newSubstr
 */
export default (content, regexp, newSubstr) => {
  let output = [];
  let result;
  let c = content;
  let key = 0;
  while ((result = regexp.exec(c)) !== null) {
    const m = result[0];
    const i = result.index;
    if (i !== 0) {
      output.push(c.substring(0, i));
    }
    output.push(newSubstr(m, key++));
    c = c.substring(i + m.length, c.length);
    regexp.lastIndex = 0;
  }
  if (c !== "") {
    output.push(c);
  }
  return output;
};
