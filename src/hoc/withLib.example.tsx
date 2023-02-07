import React, { useEffect, useState } from 'react';

const withLib = (libs: string[]) => (ChildComponent: React.FC) => {
  function Component(props: any) {
    const [orbit, setOrbit] = useState<any>();

    useEffect(() => {
      const orbitLibs = libs.map((l: string) => require(`@ffw/randstad-local-orbit/js/components/${l}`).default);

      setOrbit(orbitLibs);
    }, []);

    return <ChildComponent {...props} libs={orbit} />;
  }

  return Component;
};

export default withLib;
