import { useEffect, useRef } from "react";

export interface Library {
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: [],
}

const useLibrary = <T>(libs: []) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!libs) return;

    libs.forEach((Item: any) => {
      new Item(ref.current);
    });
  }, [libs]);

  return [ref];
};

export default useLibrary;
