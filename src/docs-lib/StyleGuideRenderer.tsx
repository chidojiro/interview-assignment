import React, { useEffect } from "react";
import Original from "react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer";
import load from "./init";

export const StyleGuideRenderer = (props: any) => {
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

        [class*="rsg--tabBody"] [class*="rsg--para"] {
          color: rgb(118, 118, 118);
          font-style: italic;
          font-size: 14px;
          margin-bottom: 3px;
        }

        [class*="rsg--tabBody"] [class*="rsg--para"] code {
          color: rgb(102, 153, 0);
        }

        [class*="rsg--tabBody"] [class*=rsg--cell] {
          vertical-align: unset;
        }

        [class*="rsg--type"] {
          width: max-content;
          display: block;
          max-width: 500px;
        }

        [class*="rsg--cell"] {
          padding-top: 0;
        }

        .warn {
          color: red;
          font-size: 20px;
        }
        .npm__react-simple-code-editor__textarea {
          line-height: 16.8px !important;
        }
      `,
        }}
      />
      <Original {...props} />
    </>
  );
};

export default StyleGuideRenderer;
