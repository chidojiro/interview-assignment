import { renderHook, act } from '@testing-library/react-hooks';
import useIsMobile from '../../hooks/useIsMobile';

describe('useIsMobile', () => {
  it('should return true when window width is less than or equal to 940', () => {
    const { result } = renderHook(() => useIsMobile());

    act(() => {
      // Set the window width to a value less than or equal to 940
      global.innerWidth = 940;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(true);

    // Clean up by resetting the window width
    act(() => {
      // Set the window width to a value less than or equal to 1024
      global.innerWidth = 1024;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));
    });
  });

  it('should return false when window width is greater than 940', () => {
    const { result } = renderHook(() => useIsMobile());

    act(() => {
      // Set the window width to a value less than or equal to 1024
      global.innerWidth = 1024;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(false);

    // Clean up by resetting the window width
    act(() => {
      // Set the window width to a value less than or equal to 940
      global.innerWidth = 940;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));
    });
  });
});
