import FormatFileSize from '../../utils/formatFileSize';

describe('FormatFileSize', () => {
  it('returns formatted size for bytes equal to 0', () => {
    const bytes = 0;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const result = FormatFileSize(bytes, sizes);
    expect(result).toBe('0 B');
  });

  it('returns formatted size for bytes in the KB range', () => {
    const bytes = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const result = FormatFileSize(bytes, sizes);
    expect(result).toBe('1 KB');
  });

  it('returns formatted size for bytes in the MB range', () => {
    const bytes = 2097152;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const result = FormatFileSize(bytes, sizes);
    expect(result).toBe('2 MB');
  });

  it('returns formatted size for bytes in the GB range', () => {
    const bytes = 1073741824;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const result = FormatFileSize(bytes, sizes);
    expect(result).toBe('1 GB');
  });

  it('returns formatted size for bytes in the TB range', () => {
    const bytes = 1099511627776;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const result = FormatFileSize(bytes, sizes);
    expect(result).toBe('1 TB');
  });

  it('returns formatted size with specified decimals', () => {
    const bytes = 123456789;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const decimals = 2;
    const result = FormatFileSize(bytes, sizes, decimals);
    expect(result).toBe('117.74 MB');
  });
});
