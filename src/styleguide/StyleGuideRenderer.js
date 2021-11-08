import React, { useEffect } from "react";
import Original from "react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer";
import load from "./init";

export const StyleGuideRenderer = (props) => {
  useEffect(load, []);

  return (
    <>
      <Original {...props} />
    </>
  );
};

export default StyleGuideRenderer;
