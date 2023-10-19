const max64bitIntValue = '18446744073709551615';
const maxPart1 = 1844674407;
const maxPart2 = 3709551615;

const isUInt64 = (numStr: string) => {
  if (!/^\d+$/.test(numStr)) return false;
  if (numStr.length < max64bitIntValue.length) return true;
  if (numStr.length > max64bitIntValue.length) return false;

  const part1 = parseInt(numStr.substring(0, 10), 10);
  const part2 = parseInt(numStr.substring(10), 10);

  return part1 < maxPart1 || (part1 === maxPart1 && part2 <= maxPart2);
};

export default isUInt64;
