import getBackground from '../../utils/getBackground';

describe('getBackground', () => {
  it('returns legacy background class when legacy flag is true', () => {
    const color = 'primary';
    const legacy = true;
    const result = getBackground(color, legacy);
    expect(result).toBe('bg-brand--primary');
  });

  it('returns correct background class for new color name', () => {
    const color = 'primary';
    const result = getBackground(color);
    expect(result).toBe('bg-variant-brand-primary');
  });
});
