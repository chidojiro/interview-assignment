import '@testing-library/jest-dom';
// Mock needed because of react-slick library. Issue described here - https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// eslint-disable-next-line func-names
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
