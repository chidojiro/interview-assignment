import React from "react";

const Block = ({label, children, ...props}) => {
  return (
    <div className="block">
      <div className="block__wrapper wrapper">
        {label && (
          <div className="block__header">
            <h2 className="block__title">{label}</h2>
          </div>
        )}
        <div className="block__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Block;