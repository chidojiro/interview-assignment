/**
 * Check if react refs are empty.
 *
 * @param  {Array} refs
 * React refs values.
 */
export default (...refs) => refs.some((r) => r.current === null);
