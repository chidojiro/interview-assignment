import { useEffect, useRef } from "react";

const useLibrary = (libs) => {
  const ref = useRef();

  useEffect(() => {
    if (!libs) return;

    libs.forEach((Item) => {
      new Item(ref.current);
    });
  }, [libs]);

  return [ref];
};

export default useLibrary;
