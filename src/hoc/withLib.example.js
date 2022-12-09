import React, { useEffect, useState } from "react";

const withLib = (libs) => (ChildComponent) => {
  function Component(props) {
    const [orbit, setOrbit] = useState();

    useEffect(() => {
      const orbitLibs = libs.map(
        (l) => require(`@ffw/randstad-local-orbit/js/components/${l}`).default,
      );

      setOrbit(orbitLibs);
    }, []);

    return <ChildComponent {...props} libs={orbit} />;
  }

  return Component;
};

export default withLib;
