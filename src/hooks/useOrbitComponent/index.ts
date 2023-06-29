import { useCallback } from 'react';

function useOrbitComponent(component: string) {
  const ref = useCallback(
    (node: null) => {
      if (!component) return;

      if (node !== null) {
        // Dynamic import needed no matter which component used.
        // Handling of more than one refs still pending.
        // eslint-disable-next-line import/no-dynamic-require
        const OrbitComponent = require(`@ffw/randstad-local-orbit/js/components/${component}`).default;
        new OrbitComponent(node);
      }
    },
    [component],
  );

  return [ref];
}

export default useOrbitComponent;
