import React from "react";

const withUI =
  (ChildComponent) =>
  (extraProps = {}) => {
    function Component(props) {
      if (!ChildComponent) {
        const componentStyle = {
          background: "#FFB511",
          textAlign: "center",
          padding: "20px",
          color: "white",
        };

        const inputStyle = {
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
