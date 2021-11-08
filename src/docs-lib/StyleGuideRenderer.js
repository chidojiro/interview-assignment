import React, { useEffect } from "react";
import Original from "react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer";
import load from "./init";

export const StyleGuideRenderer = (props) => {
  useEffect(load, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .rsg--sidebar-4 {
          width: 300px !important; 
        }
        
        .rsg--hasSidebar-2 {
          padding-left: 300px !important;
        }
        
        .rsg--content-3 {
          max-width: 1280px !important;
        }
        
        li[class*="rsg--item"] {
          line-height: 1.3;
        }
        
        .npm__react-simple-code-editor__textarea + pre .tag {
          display: initial;
        }
        .npm__react-simple-code-editor__textarea + pre {
          line-height: 1.3 !important;
        }
        
        h1[id*="section"] {
          margin-bottom: 30px;
        }
      `,
        }}
      />
      <Original {...props} />
    </>
  );
};

export default StyleGuideRenderer;
