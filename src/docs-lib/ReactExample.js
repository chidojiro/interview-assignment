import React, { useEffect, useRef } from "react";
import Original from "react-styleguidist/lib/client/rsg-components/ReactExample/ReactExample";
import packageConf from "~/package.json";

function injectOrbitJs(el) {
  packageConf?.orbitLibraries.forEach((lib) => {
    if (el.querySelectorAll(`[data-rs-${lib}]`).length) {
      const els = el.querySelectorAll(`[data-rs-${lib}]`);
      attachLibrary(lib, els);
    }
  });
}

function attachLibrary(lib, els) {
  let Orbit;

  try {
    const r = require(`./assets/${lib}.js`);
    Orbit = r[Object.keys(r)[0]];
  } catch (e) {
    console.error(e);
    return;
  }

  Orbit &&
    els.forEach((el) => {
      new Orbit(el);
    });
}

/* eslint-disable react/prop-types */
const ReactExample = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;

    injectOrbitJs(ref.current);
  }, [props.code]);
  return (
    <div ref={ref}>
      <Original {...props} />
    </div>
  );
};

export default ReactExample;
