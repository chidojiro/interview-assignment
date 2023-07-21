import { useEffect, useState } from 'react';

/**
 * The default timeout is 150 which restricts the number of requests for a given time while the user is typing.
 * This delay delays the setting of the state value which comes from the user input.
 * If the requests fail for sending high amount of requests - increase the delay.
 */
const useDebounce = (value: string, delay = 150) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
