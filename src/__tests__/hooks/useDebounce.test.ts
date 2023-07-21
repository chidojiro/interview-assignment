import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from '../../hooks/useDebounce';

jest.useFakeTimers(); // Mock the timers to control time-based behavior

describe('useDebounce', () => {
  it('should return the initial value synchronously', () => {
    const { result } = renderHook(() => useDebounce('hello', 300));
    expect(result.current).toBe('hello');
  });

  it('should return the updated value after the delay', () => {
    const { result, rerender } = renderHook((props) => useDebounce(props, 300), {
      initialProps: 'hello',
    });

    expect(result.current).toBe('hello');

    act(() => {
      rerender('world');
    });

    // Shouldn't have changed.
    expect(result.current).toBe('hello');

    // Fast-forward time by 300ms (delay specified in the hook)
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // The value should update after the delay
    expect(result.current).toBe('world');
  });

  it('should update the value with a custom delay', () => {
    const { result, rerender } = renderHook((props) => useDebounce(props.value, props.delay), {
      initialProps: { value: 'hello', delay: 500 },
    });

    expect(result.current).toBe('hello');

    act(() => {
      rerender({ value: 'world', delay: 800 });
    });

    // Shouldn't have changed.
    expect(result.current).toBe('hello');

    // Fast-forward time by 800ms (new custom delay)
    act(() => {
      jest.advanceTimersByTime(800);
    });

    // The value should have updated after the new delay
    expect(result.current).toBe('world');
  });

  it('should clear the timeout on unmount', () => {
    const { result, unmount } = renderHook((props) => useDebounce(props, 300), {
      initialProps: 'hello',
    });

    expect(result.current).toBe('hello');

    act(() => {
      unmount();
      jest.advanceTimersByTime(300); // Fast-forward time after unmount
    });

    // The value should still be the same after unmount
    expect(result.current).toBe('hello');
  });
});
