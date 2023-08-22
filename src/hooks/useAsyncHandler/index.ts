import { useEffect, useState } from 'react';

/**
 * Catch and remember (in a state) error in an asynchronous operation. Re-throw the error inside
 * react rendering cycle.
 *
 * Errors thrown inside rendering cycle will be handler by the nearest ErrorBoundary.
 */
function useAsyncHandler<P extends Array<unknown>, V>(callback: (...args: P) => Promise<V>) {
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (error) {
      // Clear remembered error and re-throw it here, inside rendeing cycle
      setError(undefined);
      throw error;
    }
  }, [error]);

  return async (...args: P) => {
    try {
      return await callback(...args);
    } catch (ex) {
      // Remember the error in a state
      setError(ex as never);
      return undefined;
    }
  };
}

export default useAsyncHandler;
