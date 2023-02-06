import React, { CSSProperties } from "react";

interface WithUIProps {
  ChildComponent?: React.FC;
  extraProps?: any;
}

const withUI = ({ ChildComponent, extraProps = {} }: WithUIProps) => {
  function Component(props: any) {
    if (!ChildComponent) {
      const componentStyle: CSSProperties = {
        background: "#FFB511",
        textAlign: "center",
        padding: "20px",
        color: "white",
      };

      const inputStyle: CSSProperties = {
        all: "unset",
        textAlign: "center",
        background: "rgba(0,0,0,0.5)",
        padding: "10px",
        marginTop: "5px",
      };

      return (
        <div style={componentStyle}>
          <h1>missing component.</h1>
          <br />
          <div>Run the script bellow to update the UI library</div>
          <input style={inputStyle} value="yarn update-scl" />
        </div>
      );
    }
    return <ChildComponent {...props} {...extraProps} />;
  }

  return Component;
};

export default withUI;