import React from 'react';

function Preloader() {
  return (
    <div className="flex justify-center">
      <span
        className="button button--preloader button--m button--plain"
      >
        <span className="dots" />
      </span>
    </div>
  );
}

export default Preloader;
