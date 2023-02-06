export interface Library {
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: [];
}
declare const useLibrary: <T>(libs: []) => import('react').RefObject<T>[];
export default useLibrary;
