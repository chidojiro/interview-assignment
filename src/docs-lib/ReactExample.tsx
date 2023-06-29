import React, { useEffect, useRef } from "react";
import Original from "react-styleguidist/lib/client/rsg-components/ReactExample/ReactExample";
import packageConf from "../../package.json";

interface MappedLibs {
  "character-count": string;
  "text-area": string;
}

interface OrbitLibrary {
  Orbit: new (el: HTMLElement) => any;
}

const mappedLibs: MappedLibs = {
  "character-count": "character-counter",
  "text-area": "textarea",
};

function injectOrbitJs(el: any) {
  packageConf?.orbitLibraries.forEach((l) => {
    const lib = mappedLibs[l as keyof MappedLibs] || l;
    if (el.querySelectorAll(`[data-rs-${lib}]`).length) {
      const els = el.querySelectorAll(`[data-rs-${lib}]`);
      attachLibrary(l, els);
    }
  });
}

function attachLibrary(lib: string, els: HTMLElement[]) {
  let Orbit: any;

  try {
    const r = require(`./assets/${lib}.js`) as OrbitLibrary;
    Orbit = Object.values(r)[0];
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
const ReactExample: React.FC<any> = (props) => {
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
